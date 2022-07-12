import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import WorkoutTwo from '../screens/WorkoutTwo'
import WorkoutThree from '../screens/WorkoutThree'

const Tab = createBottomTabNavigator()

export default function AuthRoutes() {
    return (
        <Tab.Navigator
            screenOptions={
                {
                    headerShown: false,
                    tabBarActiveTintColor: '#D0FD3E',
                    tabBarStyle: { backgroundColor: '#1C1C1E' }

                }
            }>
            <Tab.Screen

                name='Home'
                component={Home}
                options={
                    { tabBarLabel: 'Treino A' }
                }
            />
            <Tab.Screen
                name='WorkoutTwo'
                component={WorkoutTwo}
                options={
                    { tabBarLabel: 'Treino B' }
                }
            />
            <Tab.Screen
                name='WorkoutThree'
                component={WorkoutThree}
                options={
                    {
                        tabBarLabel: 'Treino C',
                    }
                }
            />
        </Tab.Navigator>
    )
}