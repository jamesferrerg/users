import { usersApi } from "../../api/usersApi";
import { setMainUsers, startLoadingUsers, startLoadingUser, setUser, setErrorUser } from "./usersSlice"

export const getUsers = ( page ) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingUsers());

        const { data } = await usersApi.get(`users?page=${ page }`)

        dispatch(setMainUsers({users: data, page: page}));
    }
}

export const getUserById = ( userId ) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingUser());
        try {
            const { data } = await usersApi.get(`users/${ userId }`)
            dispatch(setUser({user: data}));
        } catch (error) {
            dispatch(setErrorUser({errorUser: error}))
        }
    }
}