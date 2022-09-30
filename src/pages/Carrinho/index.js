import { useContext } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import CardItem from '../../components/CardItem'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export default function Cart() {

    const { carrinho, addItemCarrinho, removeItemCart, total } = useContext(CarrinhoContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Feather name='arrow-left' size={30} color='#25544B' style={{ flex: 1, justifyContent: 'flex-start' }} onPress={() => navigation.navigate('Home')} />
                <Text style={styles.titulo}>Meu carrinho</Text>
            </View>
            <FlatList
                data={carrinho}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                style={styles.lista}
                //ListEmptyComponent={() => <Text style={styles.observation}>{`Nenhum item no carrinho até o momento :(`}</Text>}
                ListEmptyComponent={() =>
                    <View style={styles.observation}>
                        <LottieView
                            source={require('../../assets/lupa.json')}
                            autoPlay
                            speed={0.5}
                        />
                        <Text style={styles.observationTexto}>Parece que ainda não fez nenhum pedido</Text>
                        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.botaoTexto}>Voltar para Home</Text>
                        </TouchableOpacity>
                    </View>
                }
                renderItem={({ item }) => (
                    <CardItem
                        data={item}
                        addAmount={() => addItemCarrinho(item)}
                        removeAmount={() => removeItemCart(item)}
                    />
                )}
            //ListFooterComponent={() => <Text style={styles.total}>Total R$ {total}</Text>}
            />
            < View style={styles.footer} >
                <Text style={styles.footerTexto}>Total de R$ {total}</Text>
            </View >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        width: "100%",
    },
    header: {
        padding: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#DDD',

    },
    observation: {
        fontWeight: 'bold',
        paddingTop: 14,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 500,
    },
    total: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 24,
        paddingTop: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 25,
        flex: 1,
        alignItems: 'center',
        marginLeft: -150,
    },

    footer: {
        backgroundColor: "#fafafa",
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 14,
        height: 50,
        borderTopWidth: 1,
        borderColor: '#ddd'
    },

    footerTexto: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    observationTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    botao: {
        backgroundColor: "#25544B",
        borderRadius: 10,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    botaoTexto: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
})