import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const RegisterScreen = () => {
    return (
        <ImageBackground
            source={require('./../assets/images/bg.png')}
            style={styles.background}
        >
            <View>
                <Text>Create an Account</Text>
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