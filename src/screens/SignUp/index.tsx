import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import loginService from '../../api/login-service';
import styles from './styles';

export default function SignUp({ navigation }) {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const _createUser = async () => {
        let response = await loginService.createUser(name, email, password);
        console.log(response);
        if (response) {
            navigation.navigate('Login')
        }
    }

    const _back = () => {
        navigation.navigate('Login')
    }

    const validatePassword = () => {
        if(password == confirmPassword){
            //TODO: disable button
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: 30
                    }}>
                        <Text style={styles.title}>Create account</Text>
                    </View>

                    <Text style={styles.label}> Nome </Text>
                    <TextInput style={styles.textInput} onChangeText={(value) => {
                        setName(value);
                    }} />

                    <Text style={styles.label}> Email </Text>
                    <TextInput style={styles.textInput} onChangeText={(value) => {
                        setEmail(value);
                    }} />

                    <Text style={styles.label}> Senha </Text>
                    <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(value) => {
                        setPassword(value);
                    }} />

                    <Text style={styles.label}> Confirma a Senha </Text>
                    <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(value) => {
                        setConfirmPassword(value);
                        validatePassword();
                    }} />


                    <TouchableOpacity style={styles.button} onPress={_createUser}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>Criar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={_back}>
                        <Text style={{ fontSize: 15, margin: "auto", marginTop: 10 }}>Voltar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    );
}
