import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

const AddItems = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/images/bg.png')}
            style={styles.background}
        >
            <SafeAreaView>
                <View style={styles.add}>
                    <View style={{
                        flexDirection: 'row',
                        padding: 20,
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity 
                            onPress={() => navigation.goBack()}>
                            <Icon
                                name='window-close'
                                type='font-awesome'
                                size={30}
                                color='#323B1D'
                            />
                        </TouchableOpacity>
                        <Text style={styles.header}>Add Transaction</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 30,
                        paddingVertical: 20
                    }}>
                        <View style={{
                            height: 50,
                            width: 100,
                            backgroundColor: '#808673',
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 25,
                                fontWeight: '700',
                            }}>USD</Text>
                        </View>
                        <TextInput
                            placeholder='amount spent'
                            keyboardType='numeric'
                           style={styles.input}
                        />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginHorizontal: 30,
                        paddingTop: 10,
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.imageBackground}>
                                <Image /*image of food/drink white*/
                                    resizeMode='contain'
                                    style={{ height: 50, width: 50 }}
                                    source={require('../../assets/images/logo.png')}
                                />
                            </View>
                            <View>
                                <Text style={styles.category}>Food & Drinks</Text>
                                    <View style={{
                                        borderBottomWidth: 2,
                                        width: '120%',
                                        marginTop: 20,
                                        marginLeft: 20,
                                        opacity: 0.4,
                                    }}>
                                    </View>
                                </View>
                            </View>
                        <Icon 
                            name='angle-right'
                            type='font-awesome'
                            size={30}
                            color='#323B1D'
                        />
                    </View>
                    
                    <View style={styles.row}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.imageBackground}>
                                <Icon
                                    name='pencil-square-o'
                                    type='font-awesome'
                                    size={40}
                                    color='#EFF2E6'
                                />
                            </View>
                            <View>
                                <TextInput
                                    placeholder='Note'
                                    keyboardType='default'
                                    style={styles.input}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{
                        height: '30%',
                        width: '95%',
                        marginHorizontal: 20,
                        marginTop: 30,
                        borderWidth: 1,
                        borderColor: '#808673',
                        backgroundColor: '#EFF2E6',
                        backgroundOpacity: 0.2,
                        alignSelf: 'center',
                    }}>
                        <Text style={{
                            paddingTop: 20,
                            paddingLeft: 20,
                            paddingBottom: 10,
                            fontSize: 25,
                            fontWeight: '500'
                        }}>
                            Last Records
                        </Text>
                        <View style={{
                            borderBottomColor: '#323B1D',
                            borderBottomWidth: 2,
                            width: '90%',
                            opacity: 0.5,
                            marginLeft: 20
                        }}>                        
                        </View>
                        <View style={styles.row}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <View style={styles.smallBackground}>
                                    <Image 
                                        resizeMode='contain'
                                        style={{ height: 30, width: 30 }}
                                        source={require('../../assets/images/logo.png')}
                                    />
                                </View>
                                <Text style={styles.category}>Taxi</Text>
                            </View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#E76F51',
                            }}>-46.00</Text>
                        </View>
                        <View style={{
                            borderBottomWidth: 2,
                            width: '85%',
                            opacity: 0.3,
                            marginLeft: 20,
                            paddingTop: 20,
                        }}>
                        </View>
                        <View style={styles.row}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <View style={styles.smallBackground}>
                                    <Image 
                                        resizeMode='contain'
                                        style={{ height: 30, width: 30 }}
                                        source={require('../../assets/images/logo.png')}
                                    />
                                </View>
                                <Text style={styles.category}>Food & Drinks</Text>
                            </View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#E76F51',
                            }}>-26.00</Text>
                        </View>
                        <View style={{
                            borderBottomWidth: 2,
                            width: '85%',
                            opacity: 0.3,
                            marginLeft: 20,
                            marginTop: 20,
                        }}>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    add: {
        height: 1000,
        width: '100%',
        marginTop: 50,
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    category: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    header: { 
        fontSize: 25,
        fontWeight: '700',
        marginLeft: 50,
    },
    imageBackground: {
        height: 70,
        width: 70,
        borderRadius: 100,
        backgroundColor: '#808673',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        fontSize: 30,
        marginLeft: 10,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#808673',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 30,
        paddingTop: 10,
    },
    smallBackground: {
        height: 40,
        width: 40,
        borderRadius: 100,
        backgroundColor: '#808673',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default AddItems;