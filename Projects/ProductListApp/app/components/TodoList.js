import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants";
import Card from "./ui/Card";

const TodoList = ({ todos }) => {
    return (
        <View style={styles.container}>
            {todos.map((todo, index) => (
                <Card key={index} style={{ margin: 2 }}>
                    <Text style={styles.todoText}>{`${todo.intValue} 🌟 ${todo.value}`}</Text>
                </Card>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.base,
        backgroundColor: COLORS.primary200,
    },
    todoText: {
        fontSize: SIZES.font,
        color: COLORS.primary900,
    },
});

export default TodoList;
