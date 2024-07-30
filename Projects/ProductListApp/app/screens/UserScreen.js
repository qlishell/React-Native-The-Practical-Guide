import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import useFetch from "../hooks/useFetch";

const UserScreen = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
    if (error) return <Text style={styles.error}>{`Error: ${error}`}</Text>;

    return (
        <View style={styles.container}>
            <Text>Data: {JSON.stringify(data)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    error: {
        color: "red",
    },
});

export default UserScreen;
