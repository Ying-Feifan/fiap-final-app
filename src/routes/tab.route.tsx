import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackRoute from './stack.route';
import Map from '../screens/Map';
import Settings from '../screens/Settings';
import Messages from '../screens/Messages';
import Favorites from '../screens/Favorites';
import FavButton from '../components/FavButton';

import {theme} from '../assets/colors';

import { FontAwesome5, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                  tabBarLabel: 'Home',
                  tabBarActiveTintColor: theme.colors.white,
                  tabBarInactiveTintColor: theme.colors.darkGrey,
                  tabBarLabelStyle: {fontSize: 13},
                  tabBarStyle: {backgroundColor: theme.colors.dark, height: 85, borderTopRightRadius: 12, borderTopLeftRadius: 12},
                  tabBarIcon: ({focused}) => { 
                    return focused 
                    ? 
                    <FontAwesome5 name="home" size={22} color={theme.colors.white} />
                    : 
                    <FontAwesome5 name="home" size={22} color={theme.colors.darkGrey} />},
                }}
                />
            <Tab.Screen 
                name="Map" 
                component={Map}
                options={{
                    tabBarLabel: 'Procurar',
                    tabBarActiveTintColor: theme.colors.white,
                    tabBarInactiveTintColor: theme.colors.darkGrey,
                    tabBarLabelStyle: {fontSize: 13},
                    tabBarStyle: {backgroundColor: theme.colors.dark, height: 85, borderTopRightRadius: 12, borderTopLeftRadius: 12},
                    tabBarIcon: ({focused}) => { 
                        return focused 
                        ? 
                        <MaterialCommunityIcons name="map-search-outline" size={23} color={theme.colors.white} /> 
                        : 
                        <MaterialCommunityIcons name="map-search-outline" size={23} color={theme.colors.darkGrey} />},
                  }}
                />
            <Tab.Screen 
                name="Favorites" 
                component={Favorites}
                options={{
                    tabBarLabel: '',
                    tabBarStyle: {backgroundColor: theme.colors.dark, height: 85, borderTopRightRadius: 12, borderTopLeftRadius: 12},
                    tabBarIcon: ({focused}) => {
                        return focused
                        ?
                        <FavButton />
                        :
                        <FavButton />
                    }
                }}
                />
            <Tab.Screen 
                name="Messages" 
                component={Messages}
                options={{
                    tabBarLabel: 'Mensagens',
                    tabBarActiveTintColor: theme.colors.white,
                    tabBarInactiveTintColor: theme.colors.darkGrey,
                    tabBarLabelStyle: {fontSize: 13},
                    tabBarStyle: {backgroundColor: theme.colors.dark, height: 85, borderTopRightRadius: 12, borderTopLeftRadius: 12},
                    tabBarIcon: ({focused}) => { 
                        return focused 
                        ? 
                        <MaterialCommunityIcons name="message-badge" size={23} color={theme.colors.white} /> 
                        : 
                        <MaterialCommunityIcons name="message-badge-outline" size={23} color={theme.colors.darkGrey} />},
                  }}
                />
            <Tab.Screen 
                name="Settings" 
                component={Settings}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarActiveTintColor: theme.colors.white,
                    tabBarInactiveTintColor: theme.colors.darkGrey,
                    tabBarLabelStyle: {fontSize: 13},
                    tabBarStyle: {backgroundColor: theme.colors.dark, height: 85, borderTopRightRadius: 12, borderTopLeftRadius: 12},
                    tabBarIcon: ({focused}) => { 
                        return focused 
                        ? 
                        <FontAwesome name="user" size={23} color={theme.colors.white} /> 
                        : 
                        <FontAwesome name="user-o" size={23} color={theme.colors.darkGrey} />},
                  }}
                />
        </Tab.Navigator>
    )
}