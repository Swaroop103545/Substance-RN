import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.WHITE,
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600', // Slightly lighter than bold
    color: COLORS.GREY, // A subtle grey for labels
    marginBottom: 8,
  },
  input: {
    borderColor: COLORS.LIGHT_GREY,
    borderWidth: 1,
    borderRadius: 8, // Rounded corners for a softer look
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: COLORS.LIGHT_WHITE, // Light background for input fields
  },
  saveButton: {
    backgroundColor: COLORS.APP_THEME_COLOR,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000', // Shadow for a lifted effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  saveButtonText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: '700', // Bold for emphasis
  },
});
