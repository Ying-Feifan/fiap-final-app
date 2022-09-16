import {StyleSheet} from 'react-native';
import { theme } from '../../assets/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.grey[300],
        marginBottom: 10,
        borderRadius: 5,
        height: 34,
        justifyContent: 'center',
    },
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleButton: {
        textAlign: 'center',
        paddingRight: 150,
        fontSize: 19
    },
    containerIcon: {
        paddingLeft: 30,
    },
    logoutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: theme.colors.red,
        borderRadius: 5,
        height: 40
    },
    textLogout: {
        color: theme.colors.white,
        fontSize: 23,
        fontWeight: 'bold'
    }
})