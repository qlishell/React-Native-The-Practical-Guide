import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./ui/Card";

const TodoList = ({ todos }) => {
    return (
        <View style={styles.container}>
            {todos.map((todo, index) => (
                <Card key={index}>
                    <Text style={styles.todoText}>{`${todo.intValue} - ${todo.value}`}</Text>
                </Card>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    todoText: {
        fontSize: 16,
        color: "#333",
    },
});

export default TodoList;
