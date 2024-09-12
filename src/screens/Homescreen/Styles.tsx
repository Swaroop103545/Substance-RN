import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  statusText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: COLORS.BLACK,
  },
  contentContainer: {
    paddingBottom: height * 0.2
  },
});
