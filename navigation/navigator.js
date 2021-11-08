import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { MovieScreen } from '../screens/MovieScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createStackNavigator();

export function MyStack () {
  return (
    <NavigationContainer>
         
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Screen' }}
        />
        
        <Stack.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{ title: 'Settings Screen' }}
        />

        <Stack.Screen
          name="Movies"
          component={MovieScreen}
          options={{ title: 'Movie Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ headerTitle: 'HOME' }}
                />
                
                <Tab.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{ title: "SETTINGS" }}
                />

                <Tab.Screen 
                name="Movies" 
                component={MovieScreen}
                options={{ title: "MOVIES" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
  }