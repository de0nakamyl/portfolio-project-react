import { useEffect, useState } from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, CheckBox, Icon, Input } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../components/TabNavigator';

const LoginView = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState('false');

    const handleLogin = () => {
        console.log('username:', username);
        console.log('password:', password);
        console.log('remember:', remember);

        if (remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({
                    username,
                    password
                })
            ).catch((error) => console.log('Could not save user info', error));
        } else {
            SecureStore.deleteItemAsync('userinfo').catch((error) =>
            console.log('Could not delete user info', error)
            );
        };

        return (
            navigation.navigate('HomePage')
        );
    };

    useEffect(() => {
        SecureStore.getItemAsync('userinfo').then((userdata) => {
            const userinfo = JSON.parse(userdata);
            if (userinfo) {
                setUsername(userinfo.username);
                setPassword(userinfo.password);
                setRemember(true);
            }
        });
    }, []);

    return (
        <ImageBackground
            source={require('./../assets/images/bg.png')}
            style={styles.background}
        >
            <Image
                source={require('./../assets/images/logo.png')}
                style={styles.logo}
                resizeMode='contain'
            />
            <View style={styles.container}>
                <Input 
                    placeholder='Username'
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <Input
                    placeholder='Password'
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <CheckBox
                    title='Remember Me'
                    center
                    checked={remember}
                    onPress={() => setRemember(!remember)}
                    containerStyle={styles.formCheckbox}
                />
                <View style={styles.formButton}>
                    <Button
                        onPress={() => handleLogin()}
                        title='Login'
                        icon={
                            <Icon
                                name='sign-in'
                                type='font-awesome'
                                color='#946741'
                                iconStyle={{ marginRight: 10 }}
                            />
                        }
                        buttonStyle={{ backgroundColor: '#E8CBB3' }}
                    />
                </View>
                <View style={styles.formButton}>
                    <Button
                        onPress={() => navigation.navigate('Register')}
                        title='Register'
                        icon={
                            <Icon
                                name='user-plus'
                                type='font-awesome'
                                color='#323B1D'
                                iconStyle={{ marginRight: 10 }}
                            />
                        }
                        buttonStyle={{ backgroundColor: '#BFC899' }}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const RegisterView = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [remember, setRemember] = useState(false);

    const handleRegister = () => {
        const userInfo = {
            username,
            password,
            firstName,
            lastName,
            email,
            remember
        };
        console.log(JSON.stringify(userInfo));

        if (remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({
                    username,
                    password
                })
            ).catch((error) => console.log('Could not save user info', error));
        } else {
            SecureStore.deleteItemAsync('userinfo').catch((error) =>
            console.log('Could not delete user info', error)
            );
        };
        return (
            navigation.navigate('HomePage')
        );
    };

    return (
        <ImageBackground
            source={require('./../assets/images/bg.png')}
            style={styles.background}
        >
            <SafeAreaView style={styles.reg}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#323B1D',
                    marginBottom: 5,
                }}>
                    Create an account
                </Text>
                <View style={styles.form}>
                    <Input
                        placeholder='Username'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={{ type: 'font-awesome', name: 'key' }}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='First Name'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='Last Name'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={(text) => setLastName(text)}
                        value={lastName}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder='Email'
                        leftIcon={{ type: 'font-awesome', name: 'envelope-o'}}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <CheckBox
                        title='Remember Me'
                        center
                        checked={remember}
                        onPress={() => setRemember(!remember)}
                        containerStyle={styles.formCheckbox}
                    />
                    <View style={styles.formButton}>
                        <Button
                            onPress={() => handleRegister()}
                            title='Register'
                            icon={
                                <Icon
                                    name='user-plus'
                                    type='font-awesome'
                                    color='#323B1D'
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            buttonStyle={{ backgroundColor: '#BFC899' }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const Stack = createStackNavigator();

const WelcomeScreen = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name='Login'
                component={LoginView}
            />
            <Stack.Screen
                name='Register'
                component={RegisterView}
            />
            <Stack.Screen
                name='HomePage'
                component={TabNavigator}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 25,
        marginTop: -100,
    },
    form: {
        borderWidth: 2,
        borderColor: '#946741',
        width: '95%',
    },
    formCheckbox: {
        backgroundColor: '#D7ECF8',
        width: '75%',
        alignSelf: 'center',
        marginTop: 20,
    },
    formIcon: {
        marginRight: 10,
    },
    formInput: {
        padding: 5,
        height: 50,
    },
    formButton: {
        margin: 10,
        width: '55%',
        alignSelf: 'center',
    },
    logo: {
        width: 320,
        height: 320,
        marginLeft: '10%',
        marginTop: '20%',
    },
    reg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default WelcomeScreen;