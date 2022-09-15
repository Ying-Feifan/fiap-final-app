import React from 'react';
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';

import {FontAwesome5} from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../assets/colors';

const dataSettings = [
    {
        key: String(Math.random()),
        name: 'Editar Pefil',
        iconType: <FontAwesome5 name="user-edit" color={theme.colors.black} size={20} />,
    },
    {
        key: String(Math.random()),
        name: 'Editar Pefil',
        iconType: <FontAwesome5 name="user-edit" color={theme.colors.black} size={20} />,
    },
    {
        key: String(Math.random()),
        name: 'Editar Pefil',
        iconType: <FontAwesome5 name="user-edit" color={theme.colors.black} size={20} />,
    },
    {
        key: String(Math.random()),
        name: 'Editar Pefil',
        iconType: <FontAwesome5 name="user-edit" color={theme.colors.black} size={20} />,
    },
    {
        key: String(Math.random()),
        name: 'Editar Pefil',
        iconType: <FontAwesome5 name="user-edit" color={theme.colors.black} size={20} />,
    },
    {
        key: String(Math.random()),
        name: 'Editar Pefil',
        iconType: <FontAwesome5 name="user-edit" color={theme.colors.black} size={20} />,
    },
    {
        key: String(Math.random()),
        name: 'Editar Pefil',
        iconType: <FontAwesome5 name="user-edit" color={theme.colors.black} size={20} />,
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
        <Text style={styles.textLogout}>LogOut</Text>
      </TouchableOpacity>
    </>
  );
}