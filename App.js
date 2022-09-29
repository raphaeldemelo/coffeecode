import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import CarrinhoProvider from './src/contexts/CarrinhoContext';

export default function App() {
  return (
    <NavigationContainer>
      <CarrinhoProvider>

        <StatusBar backgroundColor="#fafafa" barStyle='dark-content' />
        <Routes />
      </CarrinhoProvider>
    </NavigationContainer>
  );
}
