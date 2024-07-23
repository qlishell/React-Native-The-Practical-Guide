import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useCreatePostMutation } from "./services/api";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [createPost, { isLoading, error }] = useCreatePostMutation();

    const handleCreatePost = async () => {
        try {
            await createPost({ title, body: content }).unwrap();
            setTitle("");
            setContent("");
        } catch (err) {
            console.error("Failed to create post: ", err);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
                style={{ borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
            />
            <TextInput
                placeholder="Content"
                value={content}
                onChangeText={setContent}
                style={{ borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
            />
            <Button onPress={handleCreatePost} title="Create Post" disabled={isLoading} />
            {error && <Text style={{ color: "red" }}>Failed to create post: {error.message}</Text>}
        </View>
    );
};

export default CreatePost;
