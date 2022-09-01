import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },

    up: {
        width: '100%',
        height: '35%',
        backgroundColor: 'rgba(0,0,0,0)',
        alignItems: 'center',
        justifyContent: 'center',

    },

    card: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: '100px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 60,
    },
    subTitle: {
        fontSize: 15
    },
    label: {
        fontSize: 15,
    },
    textInput: {
        fontSize: 20,
        padding: 20,
        width: 250,
        height: 55,
        border: '0.2px solid black',
        borderRadius: 20
    },
    button: {
        fontSize: 20,
        width: 250,
        marginTop: 20,
        backgroundColor: 'black',
        height: 50,
        border: '0.2px solid black',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        padding: 10
    },
    smallText: {
        fontSize: 15,
        paddingTop: 10,
        alignItems: "center",
        justifyContent: 'center',
    }
});

export default styles;