import React, { useState, useContext } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Produto from '../../components/Produto';
import { useNavigation } from '@react-navigation/native';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';

export default function Home() {
    const { carrinho, addItemCarrinho } = useContext(CarrinhoContext);
    const navigation = useNavigation();
    const [produtos, setProdutos] = useState([
        {
            'id': '1',
            'nome': 'Chocolate quente',
            'foto': (require('../../assets/chocolatequente.png')),
            'preco': 15.99
        },
        {
            'id': '2',
            'nome': 'Cappuccino',
            'foto': (require('../../assets/cappuccino.png')),
            'preco': 13.99
        },
        {
            'id': '3',
            'nome': 'Frappe',
            'foto': (require('../../assets/frappe.png')),
            'preco': 20.90
        },
        {
            'id': '4',
            'nome': 'Café com leite',
            'foto': (require('../../assets/cafecomleite.png')),
            'preco': 11.99
        },
    ]);

    function handleAdionarCarrinho(item) {
        addItemCarrinho(item)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.carrinhoContent}>

                <Text style={styles.titulo}>Faça seu pedido</Text>
                <TouchableOpacity style={styles.botaoCarrinho} onPress={() => navigation.navigate('Carrinho')}>
                    {carrinho?.length >= 1 && (
                        <View style={styles.bolha}>
                            <Text style={styles.bolhaTexto}>
                                {carrinho?.length}
                            </Text>
                        </View>
                    )}

                    <Feather name='shopping-cart' size={30} color='#000' />
                </TouchableOpacity>
            </View>
            <FlatList
                data={produtos}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Produto data={item} addItemCarrinho={() => handleAdionarCarrinho(item)} />}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingEnd: 14,
        paddingStart: 14,
    },
    carrinhoContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 24,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#25544B',
    },
    bolha: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25544B',
        width: 20,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 2,
        bottom: -2,
        left: -4
    },
    bolhaTexto: {
        fontSize: 12,
        color: '#fff',
    },
})