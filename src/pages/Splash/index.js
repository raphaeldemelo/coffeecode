import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import { BackHandler, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Splash() {

    const navigation = useNavigation()

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <LottieView
                source={require('../../assets/splash.json')}
                autoSize
                autoPlay
                speed={0.5}
            />
            <Text style={styles.titulo}>
                <Text style={{ color: '#000' }}>{`</`}</Text>CoffeeCode<Text style={{ color: '#000' }}>{`>`}</Text></Text>
            <Text style={styles.slogan}>Codar só após o café</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.botaoTexto}>Avançar</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25544B'
    },

    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff'
    },
    slogan: {
        color: '#ddd',
        fontSize: 15,
    },
    botao: {
        marginTop: 30,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 10,
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoTexto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
})