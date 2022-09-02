import React from 'react';
import Loading from './src/components/Loading';
import Login from './src/screens/Login';
import Routes from './src/routes/tab.route';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </>
  );
}

