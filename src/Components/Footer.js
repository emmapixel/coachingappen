import { StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function Footer( { navigation } ) {
    return (
        <View style={styles.footer}>
            <Icon 
                name="home"
                size={30}
                color="black"
                onPress={() => navigation.navigate("Home")}
            />
             <Icon
                name="calendar"
                size={25}
                color="black"
                onPress={() => navigation.navigate("CalendarComponent")}
            />
             <Icon
                name="users"
                size={25}
                color="black"
                onPress={() => navigation.navigate("Clients")}
            />
            <Icon
                name="list-alt"
                size={25}
                color="black"
                onPress={() => navigation.navigate("ToDoList")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-around",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 12,
        borderTopWidth: 1,
        borderTopColor: "#14141410",
    },
    text: {
        fontSize: 30,
        fontWeight: "900",
    }
});