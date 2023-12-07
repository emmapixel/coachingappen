import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { ListItem } from '@rneui/themed';
import { Avatar } from '@rneui/themed';

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { getUsers } from "../Firebase/users";

export default function Clients( { navigation } ) {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const clientData = await getUsers();
            setClients(clientData);
        };

        fetchData();
    }, []);

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Klienter</Text>
            </View>
            <View style={styles.body}>
            <FlatList
                    data={clients}
                    renderItem={({item}) => (
                        <ListItem bottomDivider>
                            <Avatar
                            rounded
                            source={{ uri: 'https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/325590737_514131300859332_7838506608780677065_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MNrmMaFRswgAX-NpLQA&_nc_ht=scontent-cph2-1.xx&oh=00_AfACoX0Z8nQYdot7aSiChjPVzt8Sm1xZ2729T0jlhjqTNA&oe=647B1D33' }}
                            />
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <Footer navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "#fff",
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
        paddingHorizontal: 10,
    },
});