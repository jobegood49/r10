
import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    sectionHeader: {
      paddingTop: 5,
      paddingLeft: 10,
      paddingBottom: 5,
      backgroundColor: colors.lightGrey,
      fontSize: 12,
      fontFamily: typography.fontMain,
      fontWeight: 'bold'
    },
    item: {
      marginTop: 10,
      marginBottom: 5,
      paddingLeft: 10,
      fontFamily: typography.fontMain,
      fontSize: 14,
      fontWeight: "bold"
    },
    location: {
      marginBottom: 10,
      paddingLeft: 10,
      color: colors.mediumGrey,
      fontFamily: typography.fontMain,
      fontSize: 12
    }
  });