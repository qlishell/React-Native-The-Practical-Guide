# Tích hợp RTK Query vào ứng dụng React Native

## [RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview)

RTK Query là một công cụ mạnh mẽ để quản lý state và fetching dữ liệu, tích hợp với Redux Toolkit. Dưới đây là các bước để tích hợp RTK Query vào một ứng dụng React Native.

#### 1. Cài đặt các phụ thuộc

Đầu tiên, bạn cần cài đặt Redux Toolkit và các phụ thuộc liên quan:

```sh
npm install @reduxjs/toolkit react-redux
```

#### 2. Thiết lập Redux Store

Tạo một file `store.js` để thiết lập Redux Store và cấu hình RTK Query.

```jsx
// store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/api";

const store = configureStore({
    reducer: {
        // Thêm reducer của RTK Query vào store
        [api.reducerPath]: api.reducer,
    },
    // Thêm middleware của RTK Query vào store
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

// Thiết lập listeners cho các hành động RTK Query
setupListeners(store.dispatch);

export default store;
```

#### 3. Tạo một service với RTK Query

Tạo một file `api.js` để định nghĩa các endpoints sử dụng RTK Query.

```jsx
// services/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => "posts",
        }),
        getPostById: builder.query({
            query: id => `posts/${id}`,
        }),
        createPost: builder.mutation({
            query: newPost => ({
                url: "posts",
                method: "POST",
                body: newPost,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation } = api;
```

#### 4. Cung cấp Redux Store cho ứng dụng

Trong file `App.js`, sử dụng `Provider` để cung cấp Redux Store cho toàn bộ ứng dụng.

```jsx
// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from "./HomeScreen";

const App = () => {
    return (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    );
};

export default App;
```

#### 5. Sử dụng RTK Query trong các component

Bạn có thể sử dụng các hooks được tạo từ RTK Query để fetch dữ liệu trong các component của bạn.

**Fetch danh sách bài viết**

```jsx
// HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useGetPostsQuery, useCreatePostMutation } from "./services/api";

const HomeScreen = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery();
    const [createPost, { isLoading: isCreating }] = useCreatePostMutation();

    const handleCreatePost = async () => {
        try {
            await createPost({ title: "New Post", content: "This is a new post" }).unwrap();
        } catch (error) {
            console.error("Failed to create post: ", error);
        }
    };

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <>
            <FlatList
                data={posts}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View key={item.id}>
                        <Text>{item.title}</Text>
                    </View>
                )}
            />
            <Button onPress={handleCreatePost} title="Create Post" disabled={isCreating} />
        </>
    );
};

export default HomeScreen;
```

**Fetch một bài viết cụ thể theo ID**

```jsx
// PostDetail.js
import React from "react";
import { View, Text } from "react-native";
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
```

**Tạo bài viết mới**

```jsx
// CreatePost.js
import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
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
```

### Tổng kết

1. **Cài đặt các phụ thuộc**: Cài đặt Redux Toolkit và React Redux.
2. **Thiết lập Redux Store**: Tạo store và cấu hình RTK Query.
3. **Tạo service với RTK Query**: Định nghĩa các endpoints trong service.
4. **Cung cấp Redux Store cho ứng dụng**: Sử dụng `Provider` để cung cấp store.
5. **Sử dụng RTK Query trong các component**: Sử dụng các hooks từ RTK Query để fetch và thao tác dữ liệu.
    - Fetch danh sách bài viết.
    - Fetch chi tiết bài viết theo ID.
    - Tạo bài viết mới.

## Nếu trong services tôi có nhiều hơn 1 đường dẫn api khác nhau

Nếu bạn có nhiều hơn một API service, bạn có thể dễ dàng cấu hình Redux Store để tích hợp nhiều service bằng cách thêm các reducer và middleware từ từng service vào store. Dưới đây là cách bạn có thể làm điều đó.

### 1. Tạo nhiều API Service

Giả sử bạn có hai API service, `postsApi` và `usersApi`. Bạn sẽ tạo các service này như sau:

```jsx
// services/postsApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com/posts/" }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => "",
        }),
        getPostById: builder.query({
            query: id => `${id}`,
        }),
    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;

// services/usersApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com/users/" }),
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => "",
        }),
        getUserById: builder.query({
            query: id => `${id}`,
        }),
    }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
```

### 2. Cấu hình Redux Store

Bạn cần kết hợp reducer và middleware của từng service vào Redux Store của bạn.

```jsx
// store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "./services/postsApi";
import { usersApi } from "./services/usersApi";

const store = configureStore({
    reducer: {
        // Thêm các reducer từ các API service
        [postsApi.reducerPath]: postsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    // Thêm các middleware từ các API service
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware).concat(usersApi.middleware),
});

// Thiết lập listeners cho các hành động của RTK Query
setupListeners(store.dispatch);

export default store;
```

### 3. Sử dụng các API Service trong Component

Bạn có thể sử dụng các hooks từ các API service như bình thường.

```jsx
// HomeScreen.js
import React from "react";
import { View, Text, FlatList } from "react-native";
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
```

### Tổng kết

1. **Tạo nhiều API service**: Định nghĩa các service với các base URL khác nhau.
2. **Cấu hình Redux Store**: Thêm reducer và middleware của từng service vào store.
3. **Sử dụng các API service trong component**: Sử dụng các hooks từ từng service để fetch dữ liệu.

Bằng cách này, bạn có thể dễ dàng quản lý nhiều API service trong ứng dụng React Native của mình. Nếu bạn cần thêm thông tin hoặc có câu hỏi khác, hãy cho tôi biết nhé!
