import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Modal, ScrollView, Button, Center, VStack } from "native-base";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {bookings} from "../dummyData/bookings";

export default function CalendarComponent( { navigation } ) {
    const [dayBookings, setDayBookings] = useState([]); 
    const [modalVisible, setModalVisible] = React.useState(false);
    const [size, setSize] = React.useState("md");

    useEffect(() => {
        let date = new Date();
        const dateString = date.toISOString().split('T')[0];
        setDayBookings(bookings.filter(booking => booking.date === dateString));
    }, []);

    const onDayClicked = (day) => {
        setDayBookings(bookings.filter(booking => booking.date === day.dateString));
    }
    
    //Modal function
    const handleSizeClick = newSize => {
        setSize(newSize);
        setModalVisible(!modalVisible);
    };
    
    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Kalender</Text>
            </View>
            <View style={styles.body}>
                <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
                    <Modal.Content maxWidth="212px">
                    <Modal.CloseButton />
                    <Modal.Header>Return Policy</Modal.Header>
                    <Modal.Body>
                    <ScrollView>
                    <Text>
                        Create a 'Return Request' under “My Orders” section of
                        App/Website. Follow the screens that come up after tapping on
                        the 'Return’ button. Please make a note of the Return ID that we
                        generate at the end of the process. Keep the item ready for pick
                        up or ship it to us basis on the return mode.
                    </Text>
                    </ScrollView>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="#00bfff" onPress={() => {
                                setModalVisible(false);
                    }}>
                        Cancel
                    </Button>
                <Button onPress={() => {
                setModalVisible(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
    </Modal>
   
                <View style={styles.bodyContainer}>
                    <Calendar
                        style={styles.calendarContainer}
                        onDayPress={onDayClicked}
                    />
                    <FlatList
                        style={styles.listContainer}
                        data={dayBookings}
                        renderItem={({item}) => (
                            <View>
                                <Text>{item.customerName}</Text>
                                <Text>{item.customerEmail}</Text>
                                <Text>{item.startTime + " - " + item.endTime}</Text>
                                <Text>{item.note}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                    <Button onPress={() =>{ setModalVisible(true);
                        }}>
                            Boka tid
                    </Button>
                </View>
            </View> 
            
            <Footer navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    titleContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 10 
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    body: {
        flex: 8,
        width: "100%",
        backgroundColor: "white",
        paddingHorizontal: 40,
    },
    calendarContainer: {
        paddingBottom: 20,
    },
    listContainer: {
        paddingBottom: 20,
    }
});