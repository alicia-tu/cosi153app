import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DisplayAnImage from './intro';
import Counter from './classcount';
import GitHubDemo from './api';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'powderblue'}}>
      <Text style={{fontSize: 50}}>Welcome!</Text>
      <Text style={{fontSize: 30}}> </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Class Counter" component={Counter} />
        <Tab.Screen name="API" component={GitHubDemo} />
        <Tab.Screen name="Display An Image" component={DisplayAnImage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}