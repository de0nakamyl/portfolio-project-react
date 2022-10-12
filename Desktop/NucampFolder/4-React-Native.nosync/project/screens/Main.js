import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BudgetScreen from './BudgetScreen';
import CalendarScreen from './CalendarScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import SplashScreen from './SplashScreen';
import TaskScreen from './TaskScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Splash'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name='Splash'
                    component={SplashScreen}
                />
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                />
                <Stack.Screen 
                    name='Register'
                    component={RegisterScreen}
                />
                <Stack.Screen name='HomeTabs'>
                    { () => (
                        <Tab.Navigator
                            initialRouteName='Home'
                            activeColor='#F0EDF6'
                            inactiveColor='#3E2465'
                            barStyle={{ backgroundColor: '#BFC899', paddingBottom: 30 }}
                        >
                            <Tab.Screen
                                name='Home'
                                component={HomeScreen}
                                options={{
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
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    stackIcon: {
        color: '#946741',
        fontSize: 30
    }
});

export default Main;