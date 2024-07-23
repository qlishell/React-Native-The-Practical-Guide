import React from "react";
import { FlatList, Text, View } from "react-native";
import { useGetPostsQuery } from "./services/postsApi";
import { useGetUsersQuery } from "./services/usersApi";

const HomeScreen = () => {
    const { data: posts, error: postsError, isLoading: postsLoading } = useGetPostsQuery();
    const { data: users, error: usersError, isLoading: usersLoading } = useGetUsersQuery();

    if (postsLoading || usersLoading) return <Text>Loading...</Text>;
    if (postsError) return <Text>Error fetching posts: {postsError.message}</Text>;
    if (usersError) return <Text>Error fetching users: {usersError.message}</Text>;

    return (
        <View>
            <Text>Posts:</Text>
            <FlatList
                data={posts}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
            />

            <Text>Users:</Text>
            <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default HomeScreen;
