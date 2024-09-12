import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: COLORS.WHITE,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: COLORS.APP_THEME_COLOR,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.GREY,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.GREY,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: COLORS.APP_THEME_COLOR,
    marginBottom: 20,
    fontSize: 16,
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  button: {
    backgroundColor: COLORS.APP_THEME_COLOR,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
