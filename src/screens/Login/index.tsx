import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';



export default function Login() {

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
