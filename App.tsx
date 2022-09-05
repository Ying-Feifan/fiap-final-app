import React from 'react';
import Loading from './src/components/Loading';
import Login from './src/screens/Login';
import Routes from './src/routes/tab.route';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from './src/screens/SignUp/signUp';

export default function App() {
  return (
    <>

    <SignUp/>
    {/* <Login/> */}
    {/* <NavigationContainer>
      <Routes />
    </NavigationContainer> */}
    </>
  );
}

