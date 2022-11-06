import { useState } from 'react';
import { FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { QUOTES } from '../components/home/quotes';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.item, backgroundColor]}
    >
        <Text style={[styles.quote, textColor]}>
            {item.text}
        </Text>
        <Text style={styles.author}>
            {item.author}
        </Text>
    </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState('null');

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#E8CBB3' : '#BFC899';
        const color = item.id === selectedId ? '#946741' : '#323B1D';

        return (
            <Item 
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <ImageBackground
            source={require('../assets/images/bg.png')}
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.logout}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
                <Image 
                    style={styles.logo}
                    source={require('./../assets/images/logo.png')}
                    resizeMode='contain'
                />
                <FlatList
                    style={styles.list}
                    data={QUOTES}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    author: {
        fontStyle: 'italic'
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    list: {
        height: '80%',
        borderWidth: 2,
        borderColor: '#946741',
        margin: 10,
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: -70,
        marginBottom: -30,
    },
    logout: {
        marginTop: -60,
        marginLeft: 320,
        borderRadius: 20,
        backgroundColor: '#D7ECF8',
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    quote: {
        fontSize: 20,
    },
});

export default HomeScreen;