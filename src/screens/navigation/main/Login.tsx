
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';


export function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.up}>
                <Text> LOGO </Text>
            </View>
            <View style={styles.card}>
                <View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: '30px'
                    }}>
                        <Text style={styles.title}> Login </Text>
                        <Text style={styles.subTitle}> Sign in to continue. </Text>
                    </View>

                    <Text style={styles.label}> Username </Text>
                    <TextInput style={styles.textInput} />

                    <Text style={styles.label}> Password </Text>
                    <TextInput secureTextEntry={true} style={styles.textInput} />

                    <TouchableOpacity
                        style={styles.button}
                    >        <Text style={{ color: 'white', fontSize: '20px' }}>Log in</Text>
                    </TouchableOpacity>

                    <View style={styles.smallText}>
                        <Text> Forgot Password? </Text>
                        <Text> Signup ! </Text>
                    </View>
                </View>
            </View>
        </View>

    );
}


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
        fontSize: '60px',
    },
    subTitle: {
        fontSize: '15px'
    },
    label: {
        fontSize: '15px',
    },
    textInput: {
        fontSize: '20px',
        padding: '20px',
        width: '250px',
        height: '55px',
        border: '0.2px solid black',
        borderRadius: '20px'
    },
    button: {
        fontSize: '20px',
        width: '250px',
        marginTop: '20px',
        backgroundColor: 'black',
        height: '50px',
        border: '0.2px solid black',
        borderRadius: '10px',
        alignItems: "center",
        justifyContent: 'center',
        padding: 10
    },
    smallText: {
        fontSize: '15px',
        paddingTop: '10px',
        alignItems: "center",
        justifyContent: 'center',
    }


});