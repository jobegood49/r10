import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    padding: 5
  },
  locationContainer: {
    width: '100%',
    padding: 10,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    marginBottom: 10,
    fontSize: 24,
    fontFamily: typography.fontMain,
    fontWeight: 'bold'
  },
  subheading: {
    marginTop: 10,
    color: colors.mediumGrey,
    fontFamily: typography.fontMain,
  },
  description: {
    marginBottom: 10,
    fontFamily: typography.fontMainLight,
    fontSize: 18,
    lineHeight: 22
  },
  time: {
    marginTop: 5,
    marginBottom: 10,
    color: colors.red,
    fontFamily: typography.fontMain,
  },
  image: {
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: 25
  }
});
