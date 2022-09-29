import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function CardItem({ data, addAmount, removeAmount }) {

    const [amount, setAmount] = useState(data.amount)

    function handleRemoveItem() {
        removeAmount();
        if (amount === 0) {
            setAmount(0);
            return;
        }
        setAmount(item => item - 1)
    }

    function handleAcrescentar() {
        addAmount();
        setAmount(item => item + 1)
    }


    return (
        <View style={styles.container}>
            <View style={{ marginRight: 10 }}>
                <Image
                    source={data.foto}
                    style={styles.imagem}
                />
            </View>
            <View style={styles.content}>
                <View>
                    <Text style={styles.titulo}>{data.nome}</Text>
                    <Text style={styles.preco}>R$ {data.preco.toFixed(2)}</Text>
                </View>

                <View style={styles.amountContainer}>
                    <TouchableOpacity style={styles.botao} onPress={handleRemoveItem}>
                        <Text style={styles.botaoTexto}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.amount}>{amount}</Text>

                    <TouchableOpacity style={styles.botao} onPress={handleAcrescentar}>
                        <Text style={styles.botaoTexto}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 10,
        marginBottom: 14,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    preco: {
        fontSize: 16,
    },
    amountContainer: {
        marginTop: 14,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    botao: {
        backgroundColor: "#25544B",
        padding: 6,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 10,
    },
    botaoTexto: {
        color: '#fff',
        fontWeight: 'bold',
    },
    amount: {
        marginLeft: 14,
        marginRight: 14,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})