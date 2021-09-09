import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Splash from './views/Splash'
import OCR from './views/OCR'
import Results from './views/Results'



const AppNavigator = createStackNavigator(
    {
        Splash:Splash,
        OCR:OCR,
        Results:Results
      // Headers:Header
    },
    {
      initialRouteName: "Splash"
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
