import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, clearUser } from "../../store/slices";
import { UserCard } from "../components";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const { isLoadingUser, user, errorUser } = useSelector(
    (state) => state.users
  );
  const [userId, setUserId] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onSearchUser = (newUserId) => {
    setUserId(newUserId);
    if (newUserId.trim() === "") {
      dispatch(clearUser());
      return;
    }
    dispatch(getUserById(newUserId));
  };

  return (
    <div className="container">
      <h1>Search user</h1>
      <hr />
      <br />
      <div className="col-md-4">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Search user by id"
            value={userId}
            onChange={(e) => onSearchUser(e.target.value)}
          />
        </form>
        <br />
        {userId.trim() !== "" &&
          (errorUser ? (
            <div className="alert alert-danger">User not found!</div>
          ) : (
            user && <UserCard user={user.user.data} />
          ))}
      </div>
    </div>
  );
};
