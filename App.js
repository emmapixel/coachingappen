import { StyleSheet, View, Text } from "react-native";
import { NativeBaseProvider} from "native-base";

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import CalendarComponent from "./src/screens/CalendarComponent";
import Clients from "./src/screens/Clients";
import ToDoList from "./src/screens/ToDoList";

const Stack = createNativeStackNavigator();

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState("");
  const [chosenTask, setChosenTask] = useState("");

  const GlobalState = {
    toDoList, setToDoList,
    task, setTask,
    chosenTask, setChosenTask
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen name="Home" options={{ headerShown:false }}>
            {props => <Home {...props} GlobalState={GlobalState} />}
          </Stack.Screen>

          <Stack.Screen name="CalendarComponent" options={{ headerShown:false }}>
            {props => <CalendarComponent {...props} GlobalState={GlobalState} />}
          </Stack.Screen>

          <Stack.Screen name="Clients" options={{ headerShown:false }}>
            {props => <Clients {...props} GlobalState={GlobalState} />}
          </Stack.Screen>

          <Stack.Screen name="ToDoList" options={{ headerShown:false }}>
            {props => <ToDoList {...props} GlobalState={GlobalState} />}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});