import Calendar from 'expo-calendar';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

async function getDefaultCalendarSource() {
    const calendars = await Calendar.getCalendarsAsync(
        Calendar.EntityTypes.EVENT
    );
    const defaultCalendars = calendars.filter(
        (each) => each.source.name === 'Default'
    );
    return defaultCalendars.length
        ? defaultCalendars[0].source
        : calendars[0].source;
}

async function createCalendar() {
    const defaultCalendarSource =
        Platform.OS === 'ios'
            ? await getDefaultCalendarSource()
            : { isLocalAccount: true, name: 'Expo Calendar' };
    const newCalendarID = await Calendar.createCalendarAsync({
        title: 'Expo Calendar',
        color: '#BFC899',
        entityType: Calendar.EntityTypes.EVENT,
        sourceId: defaultCalendarSource.id,
        source: defaultCalendarSource,
        name: 'internalCalendarName',
        ownerAccount: 'personal',
        accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    console.log(`Your new calendar ID is: ${newCalendarID}`);
    return newCalendarID;
};

const CalendarScreen = () => {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [friendNameText, setFriendNameText] = useState('');
    const startDate = selectedStartDate
        ? selectedStartDate.format('YYY-MM-DD').toString()
        : '';

    const addNewEvent = async () => {
        try {
            const calendarId = await createCalendar();

            const res = await Calendar.createEventAsync(calendarId, {
                endDate: getAppointmentDate(startDate),
                startDate: getAppointmentDate(startDate),
                title: 'Happy Birthday ' + friendNameText,
            });
            Alert.alert('Event Created!');
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        (async () => {
            const { status } = await Calendar.requestCalendarPermissionsAsync();
            if (status === 'granted') {
                const calendars = await Calendar.getCalendarsAsync(
                    Calendar.EntityTypes.EVENT
                );
                console.log('Here are all your calendars:');
                console.log({ calendars });
            }
        })();
    }, []);

    return (
        <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <StatusBar style='auto' />
                <TextInput
                    onChangeText={setFriendNameText}
                    value={friendNameText}
                    placeholder='Enter the name of your friend'
                    style={styles.input}
                />
                <CalendarPicker onDateChange={setSelectedStartDate} />
                <Text style={styles.dateText}>Birthday: {startDate}</Text>
                <Button title={'Add to calendar'} onPress={addNewEvent} />
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
        justifyContent: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1
    },
    dateText: {
        margin: 16
    }
});

export default CalendarScreen;