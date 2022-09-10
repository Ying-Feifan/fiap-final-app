import React, {useState} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import {styles} from './styles';

import { ListSettings } from '../../components/ListSettings';

export default function Settings() {
  return (
    <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image 
            source={require('../../assets/images/perfil.jpeg')}
            style={styles.imagePerfil}
          />
          <Text style={styles.txtTitle}>Olá, Jurema</Text>
        </View>

        <View style={styles.containerList}>
          <ListSettings />
        </View>
    </View>
  );
}