
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
                        paddingBottom: 30
                    }}>
                        <Text style={styles.title}> Login </Text>
                        <Text style={styles.subTitle}> Sign in to continue. </Text>
                    </View>

                    <Text style={styles.label}> Username </Text>
                    <TextInput style={styles.textInput} />

                    <Text style={styles.label}> Password </Text>
                    <TextInput secureTextEntry={true} style={styles.textInput} />

                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>Log in</Text>
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
        fontSize: '20px',
        width: '250px',
        marginTop: '20px',
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