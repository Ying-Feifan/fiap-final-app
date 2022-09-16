import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import loginService from '../../api/login-service';
import styles from './styles';



export default function Login({ navigation }) {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const _login = async () => {
        navigation.navigate('Routes')
        let response = await loginService.login(email, password);
        console.log(response);
        if (response) {
            navigation.navigate('Routes')
        }
    }

    const _signUn = () => {
        navigation.navigate('SignUp')
    }

    const validateEmail = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email)) {
            //TODO: disable button
        }

    }

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

                    <Text style={styles.label}> Email </Text>
                    <TextInput onChangeText={(value) => {
                        validateEmail(value);
                        setEmail(value);
                    }} style={styles.textInput} />

                    <Text style={styles.label}> Password </Text>
                    <TextInput secureTextEntry={true} onChangeText={(value) => {
                        setPassword(value);
                    }} style={styles.textInput} />

                    <TouchableOpacity onPress={_login} style={styles.button}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>Log in</Text>
                    </TouchableOpacity>

                    <View style={styles.smallText}>
                        <Text> Forgot Password? </Text>
                        <TouchableOpacity onPress={_signUn}>
                            <Text> Sign Up ! </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    );
}
