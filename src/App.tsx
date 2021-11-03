import React from 'react';

import Routes from './routes';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './styles/theme';
import AuthProvider from './contexts/AuthContext';
import CartContext from './contexts/CartContext';

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <CartContext>
          <Routes />
        </CartContext>
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;
