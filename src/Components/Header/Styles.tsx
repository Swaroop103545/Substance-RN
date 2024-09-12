import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 80
  },
  leftButton: {
    position: 'absolute',
    left: 20,
    justifyContent: 'center',
    height: '100%',
  },
  icon: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 120, 
    height: 40, 
    resizeMode: 'contain',
  },
});