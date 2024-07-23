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
