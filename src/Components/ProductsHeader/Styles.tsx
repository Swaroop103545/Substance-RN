import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
  searchInput: {
    marginLeft: 0,
    flex: 1,
    height: 40,
    fontSize: 16,
    borderColor: COLORS.APP_THEME_COLOR,
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    paddingLeft: 8
    
  },
  cancelButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: COLORS.APP_THEME_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: COLORS.APP_THEME_COLOR,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    right: 8
  },
  addButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});