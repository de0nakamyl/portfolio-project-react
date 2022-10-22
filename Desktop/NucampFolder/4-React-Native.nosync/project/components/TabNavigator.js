import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen';
import BudgetScreen from '../screens/BudgetScreen';
import CalendarScreen from '../screens/CalendarScreen';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            headerShown='false'
            barPosition='bottom'
            barStyle={{ backgroundColor: '#E8CBB3' }}
            activeColor='#323B1D'
            inactiveColor='#BFC899'
            shifting='true'
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarColor: '#E8CBB3',
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Icon
                                name='home'
                                type='font-awesome'
                                iconStyle={styles.stackIcon}
                            /> 
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Calendar'
                component={CalendarScreen}
                options={{
                    tabBarColor: '#BEE0F4',
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Icon
                                name='calendar'
                                type='font-awesome'
                                iconStyle={styles.stackIcon}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='To Do'
                component={TaskScreen}
                options={{
                    tabBarColor: '#EDD2CE',
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Icon
                                name='list'
                                type='font-awesome'
                                iconStyle={styles.stackIcon}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Budget'
                component={BudgetScreen}
                options={{
                    tabBarColor: '#BFC899',
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Icon
                                name='money'
                                type='font-awesome'
                                iconStyle={styles.stackIcon}
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    stackIcon: {
        color: '#323B1D',
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default TabNavigator;