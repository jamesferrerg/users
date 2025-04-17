import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        page: 1,
        users: [],
        isLoading: false
    },
    reducers: {
        startLoadingUsers: (state) => {
            state.isLoading = true;
        },
        setMainUsers: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.users = action.payload.users;
        },
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingUsers, setMainUsers } = usersSlice.actions;