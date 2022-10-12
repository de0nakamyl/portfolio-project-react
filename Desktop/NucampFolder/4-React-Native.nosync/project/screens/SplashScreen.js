import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const SplashScreen = (props) => {
    return (
        <ImageBackground
            source={require('./../assets/images/bg.png')}
            style={styles.background}
        >
            <View>
                <Image 
                    source={require('./../assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
                <Text style={styles.text}>organize subtitle text here</Text>
                <TouchableOpacity
                    title='Sign Up'
                    style={styles.signup}
                    onPress={() => props.navigation.navigate({RegisterScreen})}
                >
                    <Text>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    title='Log In'
                    styles={styles.login}
                    onPress={() => props.navigation.navigate({LoginScreen})}
                >
                    <Text>Log In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    logo: {
        width: 320,
        height: 320,
        marginLeft: '10%',
        marginTop: '20%'
    },
    text: {
        color: '#323B1D',
        marginTop: '-25%',
        marginLeft: '20%'
    },
    signup: {
        backgroundColor: '#BFC899',
        color: '#946741',
        width: '75%',
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '11%',
        padding: '2%',
        fontSize: 27,
        marginTop: '30%'
    },
    login: {
        backgroundColor: '#BEE0F4',
        color: '#323B1D',
        width: '75%',
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '11%',
        padding: '2%',
        fontSize: 27,
        marginTop: '5%'
    }
});

export default SplashScreen;