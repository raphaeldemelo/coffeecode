import { useContext } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import CardItem from '../../components/CardItem'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

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
                ListEmptyComponent={() => <Text style={styles.observation}>{`Nenhum item no carrinho até o momento :(`}</Text>}
                renderItem={({ item }) => (
                    <CardItem
                        data={item}
                        addAmount={() => addItemCarrinho(item)}
                        removeAmount={() => removeItemCart(item)}
                    />
                )}
                ListFooterComponent={() => <Text style={styles.total}>Total R$ {total}</Text>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        paddingEnd: 14,
        paddingTop: 14,
    },
    header: {
        padding: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    observation: {
        fontWeight: 'bold',
        paddingEnd: 14,
        paddingTop: 14,
        paddingLeft: 55,
        paddingRight: 14,
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
        marginLeft: -130,

    }
})