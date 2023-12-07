import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from '@rneui/themed';

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { bookings } from "../dummyData/bookings";

export default function Home({ navigation, GlobalState }) {
    const { chosenTask } = GlobalState;
    const [nextBooking, setNextBooking] = useState();

    useEffect(() => {
        let date = new Date();
        const dateString = date.toISOString().split('T')[0];
        const todayBookings = bookings.filter(booking => booking.date === dateString);
        if (todayBookings.length > 0) {
            setNextBooking(todayBookings[0]);
        } else {
            setNextBooking(bookings.find(booking => booking.date > dateString));
        }
    }, []);

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>Hem</Text>
                    <View style={styles.profilePictureAndMantraContainer}>
                        <Avatar
                            marginBottom={10}
                            size={42}
                            rounded
                            source={{ uri: "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/283897728_10159198161519582_8072140821751576169_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uZiXGVGNFS8AX8l3vMg&_nc_ht=scontent-cph2-1.xx&oh=00_AfCodbYPVY0lKc0zrtas2oIKGUBYvuJ50-AMhYnqiTjfGA&oe=64795EC7" }}
                        />
                        <Text style={styles.text}>"Don't count the days, make the days count"</Text>
                    </View>
                </View>
               
                
            <View style={styles.nextBookingContainer}>
                <Text style={styles.title2}>Nästa bokning</Text>
                {
                    nextBooking
                    ? 
                    <>
                        <Text style={styles.text}>Namn: {nextBooking.customerName}</Text>
                        <Text style={styles.text}>Email: {nextBooking.customerEmail}</Text>
                        <Text style={styles.text}>Tid: {nextBooking.startTime + " - " + nextBooking.endTime}</Text>
                        <Text style={styles.text}>Notering: {nextBooking.note}</Text>
                    </>
                    :
                    <Text style={styles.title2}>Inga kommande bokningar</Text>
                }
            </View>
                <View style={styles.chosenTaskContainer}>
                    <Text style={styles.text}>Att göra: {chosenTask.task}</Text>
                </View>
            </View>
            <Footer navigation={navigation} />
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
    body: {
        flex: 8,
        width: "100%",
        backgroundColor: "white",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    topContainer: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 20,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
    },
    title2: {
        fontSize: 18,
        fontWeight: "bold",
    },
    profilePictureAndMantraContainer: {
        width: "100%",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    nextBookingContainer: {
        flex: 3,
        width: "100%",
        justifyContent: "space-evenly",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text: {
        fontSize: 18,
    },
    chosenTaskContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 10,
    }
});
