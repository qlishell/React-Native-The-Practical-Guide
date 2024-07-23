import React from "react";
import { Text, View } from "react-native";
import { useGetPostByIdQuery } from "./services/api";

const PostDetail = ({ postId }) => {
    const { data: post, error, isLoading } = useGetPostByIdQuery(postId);

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View>
            <Text>{post.title}</Text>
            <Text>{post.body}</Text>
        </View>
    );
};

export default PostDetail;
