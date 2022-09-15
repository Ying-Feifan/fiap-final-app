import { StyleSheet , Dimensions } from 'react-native';
import { getTextOfJSDocComment } from 'typescript';
import { theme } from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  containerInfo: {
    width: '100%',
    height: 185,
    backgroundColor: theme.colors.white
  },
  containerLocation: {
    paddingLeft: 30,
    marginTop: 10
  },
  divider: {
    width: '100%',
    borderWidth: 0.4,
    borderColor: theme.colors.black,
    marginTop: 10
  },
  containerInformations: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 24
  },
  containerProfissional: {
    paddingLeft: 5
  },
  name: {
    fontSize: 17,
    fontWeight: '500',
    color: theme.colors.grey[700]
  },
  location: {
    marginTop: 5,
    fontSize: 16,
    color: theme.colors.grey,
    fontWeight: '700'
  }
});