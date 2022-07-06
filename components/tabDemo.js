import * as React from 'react';
import { Text, ToastAndroid, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DisplayAnImage from './intro';
import Counter from './classcount';
import CourseDemo from './api';
import Profile from './profile';
import Career from './career';
import Feedback from './feedbackform';
import FeedbackShow from './feedbacklist';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'powderblue'}}>
      <Text style={{fontSize: 50}}>Welcome!</Text>
      <Text style={{fontSize: 30}}>This app helps you to plan your courses and career </Text>
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
        <Tab.Screen name="Courses" component={CourseDemo} />
        <Tab.Screen name="Career" component={Career}/>
        <Tab.Screen name="Profile" component= {Profile}/>
        <Tab.Screen name="Give Feedback" component={Feedback}/>
        <Tab.Screen name="Show all Feedback" component={FeedbackShow}/>
        <Tab.Screen name="About the developer" component={DisplayAnImage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}