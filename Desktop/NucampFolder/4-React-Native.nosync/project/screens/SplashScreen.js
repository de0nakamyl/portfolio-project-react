import { useState } from 'react';
import { Button, Image, ImageBackground, Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const SplashScreen = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <ImageBackground
            source={require('./../assets/images/bg.png')}
            style={styles.background}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <Image 
                        source={require('./../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                <Text style={styles.text}>organize subtitle text here</Text>
                <View style={styles.container}>
                    <Modal
                        transparent={false}
                        visible={showModal}
                        onRequestClose={() => {
                            console.log('Modal has been closed.')
                        }}
                    >
                        <View style={styles.modal}>
                            <Text style={styles.text}>Modal is open!</Text>
                            <Button
                                title='Click to close modal'
                                onPress={() => {
                                    setShowModal(!showModal);
                                }}
                            />
                        </View>
                    </Modal>
                    <Button 
                        title='Click to open modal'
                        onPress={() => {
                            setShowModal(!showModal);
                        }}
                    />
                    </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECF0F1',
        marginTop: 30
    },
    logo: {
        width: 320,
        height: 320,
        marginLeft: '10%',
        marginTop: '20%'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ff00',
        height: '70%',
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000',
        marginTop: 80,
        marginLeft: 40,
        padding: 100,
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