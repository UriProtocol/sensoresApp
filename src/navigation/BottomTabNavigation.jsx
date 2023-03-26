import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/Home';
import Lecturas from '../../screens/Lecturas';
import Sensor from '../../screens/Sensor';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sensor" component={Sensor} />
      <Tab.Screen name="Lecturas" component={Lecturas } />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation