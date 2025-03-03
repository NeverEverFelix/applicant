import { configureStore } from "@reduxjs/toolkit";
import chatgptReducer from "./chatgptSlice"; // Import the reducer

const store = configureStore({
    reducer: {
        chatgpt: chatgptReducer, // Register the ChatGPT reducer
    },
});

export default store;