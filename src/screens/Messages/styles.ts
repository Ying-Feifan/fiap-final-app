import React from 'react';
import {StyleSheet} from 'react-native';
import { theme } from '../../assets/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerSearch: {
        width: '90%',
        height: 45,
        backgroundColor: theme.colors.grey[300],
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 80
    },
    inputSearch: {
        paddingRight: 100,
    },
    containerInfos: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    containerBio: {
        paddingLeft: 20
    },
    name: {
        fontSize: 23
    },
    desc: {
        fontSize: 13,
        marginTop: 5,
        color: theme.colors.grey[700]
    },
    title: {
        marginTop: 30,
        fontSize: 30,
        color: theme.colors.grey[700]
    },
})