import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  itemContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sectionHeader: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 5,
    backgroundColor: colors.lightGrey,
    fontSize: 12,
    fontFamily: typography.fontMain,
    fontWeight: "bold"
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    flexBasis: "100%",
    fontFamily: typography.fontMain,
    fontSize: 14,
    fontWeight: "bold"
  },
  location: {
    marginBottom: 10,
    color: colors.mediumGrey,
    fontFamily: typography.fontMain,
    fontSize: 12
  }
});
