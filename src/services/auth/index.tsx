import React, {useState, useEffect} from 'react'
import {api} from '../../services/axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Response {
    token: string;
    user: {
        name: string;
        email: string
    }
}

export function signIn (): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(async () => {
            resolve({
                token: await AsyncStorage.getItem("token"),
                user: {
                    name: '',
                    email: '',
                }
            })
        }, 2000)
    })
}