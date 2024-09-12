import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.APP_THEME_COLOR,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: COLORS.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    margin: 10,
  },
  buttonContent: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: COLORS.APP_THEME_COLOR,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
