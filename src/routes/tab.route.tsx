import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackRoute from './stack.route';
import Map from '../screens/Map';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="HomeStack" component={StackRoute} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}