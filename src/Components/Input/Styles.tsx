import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    position: 'relative',
  },
  inputWrapper: {
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.GREY,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    justifyContent: 'center',
  },
  input: {
    height: '100%',
    fontSize: 16,
    color: COLORS.BLACK,
    backgroundColor: 'transparent',
    paddingVertical: 0,
    marginBottom: 20
  },
  focusedInput: {
    borderColor: COLORS.APP_THEME_COLOR,
  },
});
