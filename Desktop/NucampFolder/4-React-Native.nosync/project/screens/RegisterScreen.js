import { useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';

const RegisterScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('./../assets/images/bg.png')}
            style={styles.background}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Create an Account</Text>
                <View>
                    <TextInput placeholder='Enter Email' />
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Enter Password'
                    />
                    <Button
                        title='Submit'
                        onPress={() => navigation.navigate('Home', {HomeScreen})}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    }
});

export default RegisterScreen;