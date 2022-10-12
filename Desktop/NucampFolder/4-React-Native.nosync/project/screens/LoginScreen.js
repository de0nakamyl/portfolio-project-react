import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => {
    return (
        <ImageBackground
            source={require('./../assets/images/bg.png')}
            style={styles.background}
        >
            <View>
                <Text>Login Screen</Text>
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

export default LoginScreen;