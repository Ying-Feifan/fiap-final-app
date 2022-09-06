import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function SignUp() {
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

                    <Text style={styles.label}> Username </Text>
                    <TextInput style={styles.textInput} />

                    <Text style={styles.label}> Password </Text>
                    <TextInput secureTextEntry={true} style={styles.textInput} />

                    <Text style={styles.label}> Email </Text>
                    <TextInput style={styles.textInput} />

                    <Text style={styles.label}> Mobile </Text>
                    <TextInput style={styles.textInput} />

                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>Create</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}
