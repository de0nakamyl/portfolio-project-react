import { useState } from 'react';
import { Alert, ImageBackground, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
    let today = new Date().toISOString().slice(0,10);

    const [modalVisible, setModalVisible] = useState(false);
    const [daySelected, setDaySelected] = useState('day');

    return (
        <ImageBackground
            source={require('./../assets/images/bg.png')}
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.header}>Calendar</Text>
                    <Calendar
                        style={styles.calendar}
                        markingType={'period'}
                        markedDates={{
                            '2022-11-06': { textColor: '#EDD2CE' },
                            '2022-11-13': { textColor: '#EDD2CE' },
                            '2022-11-20': { textColor: '#EDD2CE' },
                            '2022-11-27': { textColor: '#EDD2CE' },
                            '2022-11-08': { startingDay: true, color: '#D7ECF8' },
                            '2022-11-09': { color: '#D7ECF8' },
                            '2022-11-10': { endingDay: true, color: '#D7ECF8' },
                            '2022-11-18': { disabled: true, startingDay: true, color: '#EFF2E6', endingDay: true },
                            '2022-11-23': { startingDay: true, color: '#E8CBB3', textColor: '#946741' },
                            '2022-11-24': { selected: true, color: '#E8CBB3', textColor: '#946741' },
                            '2022-11-25': { color: '#E8CBB3', textColor: '#946741' },
                            '2022-11-26': { color: '#E8CBB3', textColor: '#946741', endingDay: true },
                        }}
                        initialDate={today}
                        minDate={'2020-01-01'}
                        maxDate={'2027-12-31'}
                        onDayPress={day => [setModalVisible(!modalVisible), setDaySelected('day')]}
                        disableMonthChange={true}
                        firstDay={1}
                        enableSwipeMonths={true}
                        theme={{
                            selectedDayBackgroundColor: '#EFF2E6'
                        }}
                    />
                </View>
                <View>
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Pressable style={styles.buttonClose}
                                onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Icon
                                        name='window-close-o'
                                        type='font-awesome'
                                        color='#323B1D'
                                    />
                                </Pressable>
                                <Text style={styles.modalText}>{daySelected}</Text>
                            </View>
                        </View>
                    </Modal>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    buttonClose: {
        padding: 10,
        marginLeft: -335,
        marginTop: -40,
    },
    calendar: {
        borderWidth: 1, 
        borderColor: '#BEE0F4',
        width: 370,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#808673',
        padding: 10,
        fontSize: 40,
        fontWeight: '500',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    modalText: {
        textAlign: 'center',
        fontSize: 20,
    },
    modalView: {
        margin: 20,
        height: 240,
        width: 370,
        backgroundColor: '#D7ECF8',
        padding: 35,
        alignItems: 'center',
        marginBottom: -360,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textStyle: {
        color: '#323B1D',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default CalendarScreen;