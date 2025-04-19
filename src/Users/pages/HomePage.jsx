import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../store/slices";
import { UserCard, Pagination } from "../components";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, users } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers(users.page || 1));
  }, [dispatch])
  
  const handlePageChange = (newPage) => {
    dispatch(getUsers(newPage));
  };

  return (
    <div className="container">
      <h1 className="pt-2">All fake users</h1>
      <hr />
      <br />
      <span>{ isLoading ? 'Loading...' : '' }</span>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {
          users.data?.map((user) => (
            <UserCard user={user} key={user.id} />
          ))
        }
      </div>
      <br />
      <Pagination 
        currentPage={users.page}
        totalPages={users.total_pages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
