import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        token: '',
    },
};

export const userSlice = createSlice({
    name: 'user',

    initialState,
    reducers: {
        logInUser: (state, action) => {
            state.value.token = action.payload;
        },
        logOutUser: (state) => {
            state.value.token = '';
        },
    },
});

export const { logInUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;