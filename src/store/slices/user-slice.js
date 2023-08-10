import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    customerInfo: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.user.accessToken = action.payload.accessToken;
        },
        logoutSuccess(state) {
            state.accessToken = null;
        },
        setCustomerInfo(state, action) {
            console.log(action.payload)
            state.user.customerInfo = action.payload;
        },
    },
});

export const { loginSuccess, logoutSuccess, setCustomerInfo } = userSlice.actions;

export default userSlice.reducer;
