import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobLink: "",
    results: null,  // Stores ChatGPT API response
    isLoading: false,
    isError: false,
};

const chatgptSlice = createSlice({
    name: "chatgpt",
    initialState,
    reducers: {
        setJobLink: (state, action) => {
            state.jobLink = action.payload; // ✅ Update jobLink in Redux
        },
        startLoading: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        setResults: (state, action) => {
            state.results = action.payload;
            state.isLoading = false;
        },
        setError: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
    },
});

export const { setJobLink, startLoading, setResults, setError } = chatgptSlice.actions;
export default chatgptSlice.reducer;
