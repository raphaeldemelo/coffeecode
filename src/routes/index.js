import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from '../pages/Splash';
import Home from '../pages/Home';
import Carrinho from '../pages/Carrinho';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name='Splash'
                component={Splash}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }}
            />
            <Stack.Screen
                name='Carrinho'
                component={Carrinho}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}