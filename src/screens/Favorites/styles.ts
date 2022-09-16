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
        width: 100,
        height: 100,
        borderRadius: 50
    },
    containerBio: {
        paddingLeft: 20
    },
    name: {
        fontSize: 23
    },
    desc: {
        fontSize: 11,
        marginTop: 5,
        color: theme.colors.grey[700]
    },
    containerContact: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    contact: {
        fontSize: 12,
        marginLeft: 10,
        fontWeight: '500'
    },
    containerHeart: {
        paddingLeft: 45
    }
})