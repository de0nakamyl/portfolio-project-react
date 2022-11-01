import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button, CheckBox, Icon, Input } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

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
    };

    useEffect(() => {
        SecureStore.getItemAsync('userinfo').then((userdata) => {
            const userinfo = JSON.parse(userdata);
            if (userinfo) {
                setUsername(userinfo.name);
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>sign in to your account</Text>
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
                            color='#BFC899'
                            icon={
                                <Icon
                                    name='sign-in'
                                    type='font-awesome'
                                    color='#946741'
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            buttonStyle={{ backgroundColor: '#BFC899' }}
                        />
                    </View>
                    <View style={styles.formButton}>
                        <Button 
                            onPress={() => navigation.navigate('Register')}
                            title='Register'
                            color='#EDD2CE'
                            icon={
                                <Icon
                                    name='user-plus'
                                    type='font-awesome'
                                    color='#323B1D'
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            titleStyle={{ color: '#323B1D' }}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    }
});

export default LoginScreen;