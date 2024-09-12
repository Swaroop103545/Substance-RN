import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: COLORS.APP_THEME_COLOR,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: COLORS.GREY,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  category: {
    fontSize: 16,
    color: COLORS.GREY,
  },
  rating: {
    fontSize: 16,
    color: COLORS.GREY,
    marginTop: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: COLORS.WHITE,
    borderTopWidth: 1,
    borderTopColor: COLORS.OFFWHITE,
  },
  editButton: {
    backgroundColor: COLORS.APP_THEME_COLOR,
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
