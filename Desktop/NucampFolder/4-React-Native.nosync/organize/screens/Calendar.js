import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { addWeeks, format, subWeeks } from 'date-fns';

const build = (date = new Date()) => format(date, 'yyyy-mm-dd');

const getMarkedDates = (baseDate, appointments) => {
    const markedDates = {};

    markedDates[build(baseDate)] = { selected: true };

    appointments.forEach((appointment) => {
        const formattedDate = build(new Date(appointment.date));
        markedDates[formattedDate] = {
            ...markedDates[formattedDate],
            marked: true,
        };
    });

    return markedDates;
};

const CalendarScreen = () => {
    const baseDate = new Date(2022, 10, 27);
    const APPOINTMENTS = [
        {
            date: '2019-11-22T05:00:00.000Z',
            title: 'past',
        },
        {
            date: '2022-10-26T22:03:03.000Z',
            title: 'today',
        },
        {
            date: '2023-03-14T12:01:23.000Z',
            title: 'future',
        },
    ];

    return (
        <ImageBackground
            source={require('../assets/images/bg.png')}
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <CalendarList
                    style={{
                        borderWidth: 1,
                        borderColor: '#F1DFD0',
                    }}
                    horizontal={true}
                    pagingEnabled={true}
                    current={build(baseDate)}
                    onDayPress={(day) => {
                        console.log('selected day', day);
                    }}
                    markedDates={getMarkedDates(baseDate, APPOINTMENTS)}
                    theme={{
                        selectedDayBackgroundColor: '#BFC899',
                        selectedDayTextColor: '#323B1D',
                        selectedDotColor: '#D7ECF8',
                        dayTextColor: '#808673',
                        textDisabledColor: '#946741',
                        dotColor: '#EDD2CE',
                        monthTextColor: '#323B1D',
                        textMonthFontWeight: 'bold',
                    }}
                />
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default CalendarScreen;