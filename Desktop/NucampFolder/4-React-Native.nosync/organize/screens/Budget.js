import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AddItems from '../components/budget/AddItems';
import { createStackNavigator } from '@react-navigation/stack';

let today = new Date().toISOString().slice(0,10);

const TodayView = ({ navigation }) => {
    const handleMonth = () => {
        return (
            navigation.navigate('Month')
        );
    };

    return (
        <ImageBackground
            source={require('../assets/images/bg.png')}
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.header}>
                        Budget
                    </Text>
                    <Text style={styles.total}>
                        $ 100.00
                    </Text>
                </View>
                <View style={styles.money}>
                    <View style={styles.tabs}>
                        <TouchableOpacity
                            onPress={() => console.log('Today')}
                            style={styles.activeToday}
                        >
                            <Text style={styles.activeText}>
                                TODAY
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleMonth()}
                            style={styles.inactiveMonth}
                        >
                            <Text style={styles.inactiveText}>
                                MONTH
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddItems')}
                            style={styles.add}
                        >
                            <AntDesign name='plus' size={40} color='#323B1D' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 }}>
                        <Text style={styles.date}>{today}</Text>
                        <Text style={styles.remaining}>35.81</Text>
                    </View>
                    <View style={styles.transactions}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginHorizontal: 30,
                            paddingTop: 30,
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={styles.logo}
                                    source={require('../assets/images/logo.png')}
                                />
                                <Text style={styles.expense}>Food</Text>
                            </View>
                            <Text name='Food' style={styles.amount}>21.43</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginHorizontal: 30,
                            paddingTop: 30,
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={styles.logo}
                                    source={require('../assets/images/logo.png')}
                                />
                                <Text style={styles.expense}>Lyft</Text>
                            </View>
                            <Text name='Lyft' style={styles.amount}>14.38</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const MonthView = ({ navigation }) => {
    const handleToday = () => {
        return (
            navigation.navigate('Today')
        );
    };

    return (
        <ImageBackground
            source={require('../assets/images/bg.png')}
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.header}>
                        Budget
                    </Text>
                    <Text style={styles.total}>
                        $ 2,518.00
                    </Text>
                </View>
                <View style={styles.money}>
                    <View style={styles.tabs}>
                        <TouchableOpacity
                            onPress={() => handleToday()}
                            style={styles.inactiveToday}
                        >
                            <Text style={styles.inactiveText}>
                                TODAY
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => console.log('Month')}
                            style={styles.activeMonth}
                        >
                            <Text style={styles.activeText}>
                                MONTH
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddItems')}
                            style={styles.add}
                        >
                            <AntDesign name='plus' size={40} color='#323B1D' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 }}>
                        <Text style={styles.date}>November</Text>
                        <Text style={styles.remaining}>1408.75</Text>
                    </View>
                    <View style={styles.transactions}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginHorizontal: 30,
                            paddingTop: 30,
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={styles.logo}
                                    source={require('../assets/images/logo.png')}
                                />
                                <Text style={styles.expense}>Food</Text>
                            </View>
                            <Text style={styles.amount}>208.75</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginHorizontal: 30,
                            paddingTop: 30,
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={styles.logo}
                                    source={require('../assets/images/logo.png')}
                                />
                                <Text style={styles.expense}>Rent</Text>
                            </View>
                            <Text style={styles.amount}>1200.00</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const Stack = createStackNavigator();

const BudgetScreen = () => {
    return (
        <Stack.Navigator
            initialRouteName='Today'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name='Today'
                component={TodayView}
            />
            <Stack.Screen
                name='Month'
                component={MonthView}
            />
            <Stack.Screen
                name='AddItems'
                component={AddItems}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    activeMonth: {
        borderColor: '#946741',
        borderWidth: 2,
        marginLeft: 30,
        padding: 6,
    },
    activeText: {
        color: '#323B1D',
        fontWeight: 'bold',
        fontSize: 25,
    },
    activeToday: {
        borderColor: '#946741',
        borderWidth: 2,
        padding: 6,
    },
    add: {
        backgroundColor: '#EDD2CE',
        borderRadius: 100,
        height: 40,
        marginLeft: 45,
        width: 40,
    },
    amount: {
        color: '#808673',
        fontSize: 20,
        fontWeight: 'bold',
    },
    background: {
        height: '100%',
        position: 'absolute',
        width: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    date: { 
        fontSize: 30,
        fontWeight: 'bold',
        color: '#323B1D'
    },
    expense: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    header: {
        alignSelf: 'center',
        color: '#808673',
        fontSize: 40,
        fontWeight: '600',
        marginTop: -20,
        paddingVertical: 30,
    },
    inactiveToday: {
        borderColor: '#F1DFD0',
        borderStyle: 'dashed',
        borderWidth: 2,
        padding: 6,
    },
    inactiveMonth: {
        borderColor: '#F1DFD0',
        borderStyle: 'dashed',
        borderWidth: 2,
        marginLeft: 30,
        padding: 6,
    },
    inactiveText: {
        color: '#BFC899',
        fontSize: 25,
        fontWeight: 'bold',
    },
    logo: {
        fontSize: 25,
        fontWeight: 'bold',
        height: 50,
        opacity: 0.5,
        width: 50,
    },
    money: {
        backgroundColor: '#EFF2E6',
        backgroundOpacity: 0.2,
        borderColor: '#808673',
        borderWidth: 1,
        height: '60%',
        width: '95%',
    },
    remaining: {
        color: '#808673',
        fontSize: 30,
        fontWeight: 'bold',
    },
    tabs: {
        flexDirection: 'row',
        padding: 30,
    },
    top: {
        padding: 30,
    },
    total: {
        color: '#808673',
        fontSize: 50,
        fontWeight: '700',
        padding: 10,
        marginTop: -20,
    },
    transactions: {
        marginLeft: 25,
        opacity: 0.7,
        width: '85%',
    },
});

export default BudgetScreen;