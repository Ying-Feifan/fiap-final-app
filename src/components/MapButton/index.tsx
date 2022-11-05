import {View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

import {useNavigation} from '@react-navigation/native';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import {theme} from '../../assets/colors';

export default function MapButton(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
                <MaterialCommunityIcons name="map-search-outline" size={25} color={theme.colors.white} />
            </TouchableOpacity>
        </View>
    )
}