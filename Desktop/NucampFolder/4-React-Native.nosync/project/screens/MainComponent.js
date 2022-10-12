import { Platform, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'
import Constants from 'expo-constants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import BudgetScreen from './BudgetScreen';
import CalendarScreen from './CalendarScreen';
import DirectoryScreen from './DirectoryScreen';
import SplashScreen from './SplashScreen';
import TaskScreen from './TaskScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#B7BEC6',
    headerStyle: { backgroundColor: '#B6ACB7' }
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='SplashScreen'
                component={SplashScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={({ navigation }) => ({
                    title: 'Directory',
                    headerLeft: () => (
                        <Icon
                            name='list'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const CalendarNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Calendar'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Calendar'
                component={CalendarScreen}
                options={({ navigation }) => ({
                    title: 'Calendar',
                    headerLeft: () => (
                        <Icon
                            name='calendar'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const BudgetNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName='Budget'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Budget'
                component={BudgetScreen}
                options={({ navigation }) => ({
                    title: 'Budget',
                    headerLeft: () => (
                        <Icon
                            name='money'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#E8CBB3' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{
                        title: 'Directory',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='list'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen 
                    name='Calendar'
                    component={CalendarNavigator}
                    options={{
                        title: 'Calendar',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='calendar'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Budget'
                    component={BudgetNavigator}
                    options={{
                        title: 'Budget',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='money'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    
                    }}
                />
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#964741',
        fontSize: 24
    }
});

export default Main;