import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './views/Home';
import Another from './views/Another';
import Scanner from './views/Scanner';

const navigator = createStackNavigator({
  Home: { screen: Home },
  Another: { screen: Another},
  Scanner: { screen: Scanner}
},
{
    initialRouteName: 'Home',
  //  headerMode: 'none'
}
);

export default createAppContainer(navigator);
