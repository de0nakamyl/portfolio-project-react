import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { gapi } from 'gapi-script';

const addEvent = (calendarID, event) => {
    function initiate() {
      gapi.client
        .request({
          path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          method: "POST",
          body: event,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(
          (response) => {
            return [true, response];
          },
          function (err) {
            console.log(err);
            return [false, err];
          }
        );
    }
    gapi.load("client", initiate);
  };

const CalendarScreen = () => {
    const [events, setEvents] = useState([]);

    const calendarID = process.env.REACT_APP_CALENDAR_ID;
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    const getEvents = (calendarID, apiKey) => {
        function initiate() {
            gapi.client
                .init({
                    apiKey: apiKey,
                })

                .then(function () {
                    return gapi.client.request({
                        path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
                    });
                })

                .then(
                    (response) => {
                        let events = response.result.items;
                        return events;
                    },
                    function (err) {
                        return [false, err];
                    }
                );
        }

        gapi.load('client', initiate);
    };

    useEffect(() => {
        const events = getEvents(calendarID, apiKey);
        setEvents(events);
    }, []);

    return(
        <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.background}
        >
            <div className='App pt-4'>
                <h1 className='text-2xl font-bold mb-4'>
                    React App with Google Calendar API!
                    <ul>
                        {events?.map((event) => (
                            <li key={event.id} className='flex justify-center'>
                                <Event description={event.summary} />
                            </li>
                        ))}
                    </ul>
                </h1>
            </div>
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
    },
});

export default CalendarScreen;