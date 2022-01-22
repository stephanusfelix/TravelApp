/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Detail from './src/screens/Detail';
import Routes from './src/route/Route';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
