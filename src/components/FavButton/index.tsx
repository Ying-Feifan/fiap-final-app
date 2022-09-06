import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

import {useNavigation} from '@react-navigation/native';

import {MaterialIcons} from '@expo/vector-icons';

export default function FavButton(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Favorites')}>
                <MaterialIcons name="favorite" size={25} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    )
}