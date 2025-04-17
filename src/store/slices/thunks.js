import { usersApi } from "../../api/usersApi";
import { setMainUsers, startLoadingUsers } from "./usersSlice"

export const getUsers = ( page ) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingUsers());

        const { data } = await usersApi.get(`users?page=${ page }`)

        dispatch(setMainUsers({users: data, page: page}));
    }
}