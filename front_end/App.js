import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { PermissionsAndroid, Text, Alert, StyleSheet, View } from 'react-native';
export async function request_location_runtime_permission() {

    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.INTERNET,
            {
                'title': 'ReactNativeCode Permission',
                'message': 'ReactNativeCode App needs access to your location '
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert("Permission Granted.");
        }
        else {
            Alert.alert("Permission Not Granted");
        }
    } catch (err) {
        console.warn(err)
    }
}

import Splash from './views/Splash'
import OCR from './views/OCR'
// import Results from './views/Results'
// import ResultsView from './views/ResultsView'
import YourResult from './views/YourResult'



const AppNavigator = createStackNavigator(
    {
        Splash:Splash,
        OCR:OCR,
        // Results:Results,
        // ResultsView:ResultsView,
        YourResult:YourResult
      // Headers:Header
    },
    {
      initialRouteName: "Splash"
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
    async componentDidMount() {
        await request_location_runtime_permission()
    }
  render() {
    return <AppContainer />;
  }
}
