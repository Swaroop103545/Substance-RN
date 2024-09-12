import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {loadFromStorage, saveToStorage} from '../utils/storageUtils';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  searchQuery: '',
};

// Define custom error messages
const errorMessages: Record<string, string> = {
  'Network Error': 'Network error. Please check your internet connection.',
  '404': 'Products not found.',
  '500': 'Server error. Please try again later.',
  default: 'An unexpected error occurred. Please try again.',
};

export const loadProductsFromStorage = createAsyncThunk(
  'products/loadProductsFromStorage',
  async () => {
    const storedProducts = await loadFromStorage('products');
    return storedProducts || [];
  },
);

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    await saveToStorage('products', response.data); // Save to local storage
    return response.data;
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredProducts = state.products.filter(product =>
        product.title.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.filteredProducts.push(action.payload);
      saveToStorage('products', state.products); // Save updated products to local storage
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadProductsFromStorage.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductsFromStorage.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(loadProductsFromStorage.rejected, (state, action) => {
        state.loading = false;
        state.error =
          errorMessages[action.error.message as keyof typeof errorMessages] ||
          errorMessages.default;
      })
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        let errorMessage = errorMessages.default;

        if (action.error.message) {
          if (action.error.message.includes('Network Error')) {
            errorMessage = errorMessages['Network Error'];
          } else if (action.error.message.includes('404')) {
            errorMessage = errorMessages['404'];
          } else if (action.error.message.includes('500')) {
            errorMessage = errorMessages['500'];
          }
        }

        const status = action.error.response?.status;
        if (status) {
          errorMessage = errorMessages[status];
          errorMessage = errorMessages[status] || errorMessages.default;
        }

        state.error = errorMessage;
      });
  },
});

export const {setSearchQuery, addProduct} = productsSlice.actions;
export default productsSlice.reducer;
