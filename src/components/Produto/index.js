import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function Produto({ data, addItemCarrinho }) {
    return (
        <View style={styles.container}>

            <ImageBackground
                source={data.foto}
                style={styles.imagem}
            >
                <View style={styles.cardContent}>
                    <View style={styles.contentProduto}>
                        <Text style={styles.nomeProduto}>{data.nome}</Text>
                    </View>
                    <View style={styles.contentPreco}>
                        <Text style={styles.precoProduto}>R$ {data.preco.toFixed(2)}</Text>
                        <TouchableOpacity style={styles.botaoAdicionar} onPress={addItemCarrinho}>
                            <Text style={styles.botaoTexto}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, .3)',
    },

    imagem: {
        flex: 1,
        width: "100%",
        height: "100%",

    },

    nomeProduto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    precoProduto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },

    botaoAdicionar: {
        backgroundColor: "#25544B",
        borderRadius: 10,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },

    botaoTexto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    contentProduto: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    contentPreco: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})