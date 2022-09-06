import {StyleSheet} from 'react-native';
import {theme} from '../../assets/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.red,
        height: 60,
        width: 70,
        borderRadius: 30,
    }
})