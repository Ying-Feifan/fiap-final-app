import React from 'react';
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';

import {FontAwesome5, FontAwesome, Ionicons, MaterialIcons} from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../assets/colors';

const dataSettings = [
    {
        key: String(Math.random()),
        name: 'Meu Perfil',
        iconType: <FontAwesome5 name="user-edit" color={theme.colors.black} size={20} />,
    },
    {
        key: String(Math.random()),
        name: 'Assinatura',
        iconType: <FontAwesome name="credit-card" color={theme.colors.black} size={20} />,
    },
    {
        key: String(Math.random()),
        name: 'Configurações',
        iconType: <Ionicons name="settings" color={theme.colors.black} size={20} />,
    },
    {
        key: String(Math.random()),
        name: 'Suporte',
        iconType: <MaterialIcons name="contact-support" color={theme.colors.black} size={20} />,
    },
]

export function ListSettings() {
  return (
    <>
      {dataSettings.map((items) =>
      <View style={styles.container}>
       <TouchableOpacity style={styles.containerButton}>
        <View style={styles.containerIcon}>
          {items.iconType}
        </View>
       <Text style={styles.titleButton}>{items.name}</Text>
      </TouchableOpacity>
      </View>
      )}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.textLogout}>Sair</Text>
      </TouchableOpacity>
    </>
  );
}