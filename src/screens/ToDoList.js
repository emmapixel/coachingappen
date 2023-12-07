import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function ToDoList({ navigation, GlobalState }) {
    const { toDoList, setToDoList, task, setTask, setChosenTask } = GlobalState;

    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity
                style={styles.task}
                onPress={() => handleChoosenTask(item)}
            >
                <Text>{item.task}</Text>
            </TouchableOpacity>
        )  
    };

    const handleSaveTask = () => {
        const index = toDoList.length + 1;
        setToDoList(prevState => [...prevState, { id: index, task: task }])

        setTask("");
    }

    const handleChoosenTask = (item) => {
        setChosenTask(item);
        navigation.navigate("Home");
    }

    return(
        <View style={styles.screen}>
            <Header />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Att Göra</Text>
            </View>
            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    onChangeText={setTask}
                    value = {task}
                    placeholder="Lägg till en uppgift..."
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handleSaveTask()}
                >
                    <Text style={styles.buttonText}>Lägg till</Text>
                </TouchableOpacity>
                <FlatList
                    data={toDoList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

            <Footer navigation={navigation} />
        </View>
    )
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
        paddingHorizontal: 40
    },
    input: {
        fontSize: 25,
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    button: {
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#00bfff",
    },
    task: {
        fontSize: 30,
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
});