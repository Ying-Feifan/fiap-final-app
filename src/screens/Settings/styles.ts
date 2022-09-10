import { StyleSheet } from 'react-native';
import {theme} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePerfil: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  containerImage: {
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtTitle: {
    paddingTop: 15,
    fontSize: 19,
    color: theme.colors.grey[700]
  },
  containerList: {
    width: '97%',
  }
});