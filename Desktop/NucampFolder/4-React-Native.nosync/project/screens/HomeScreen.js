import { useState } from 'react';
import { FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

const DATA = [
    {
        id: 0,
        title: 'Upcoming Events',
    },
    {
        id: 1,
        title: 'Bills to pay today',
    },
    {
        id: 2,
        title: 'To do today'
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const HomeScreen = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#E8CBB3' : '#BFC899'
        const color = item.id === selectedId ? '#323B1D' : '#946741';

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
                <Image
                    style={styles.logo}
                    source={require('./../assets/images/logo.png')}
                    resizeMode='contain'
                />
                <Card style={{ borderWidth: '2', borderColor: '*946741', backgroundColor: '#E8CBB3'}}>
                    <FlatList 
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />
                </Card>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 75,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200
    },
    title: {
        fontSize: 24
    }
});

export default HomeScreen;