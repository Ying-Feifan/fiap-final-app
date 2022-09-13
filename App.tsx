import Routes from './src/routes/tab.route';
import {NavigationContainer} from '@react-navigation/native';
import LoginRoutes from './src/routes/stack.route';

//Login vai ser a primeira pagina porem e impossivel de logar sem o back-end
export default function App() {
  return (
    <>
    <NavigationContainer>
      <LoginRoutes/>
      {/* <Routes /> */}
    </NavigationContainer>
    </>
  );
}

