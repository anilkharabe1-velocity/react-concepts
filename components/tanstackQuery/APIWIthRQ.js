import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const APIWithRQ = () => {
  // https://jsonplaceholder.typicode.com/users/1 =>queryKey: ["users", users.id],
  // https://jsonplaceholder.typicode.com/users =>queryKey: ["users"],
  // https://jsonplaceholder.typicode.com/users/1/posts =>queryKey: ["users", users.id, 'posts'],

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return axios.get("https://jsonplaceholder.typicode.com/users");
    },
    staleTime: 20000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
  });

  if (isLoading) {
    return (
      <div>
        <h1>Loading......</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error has occured...</h1>
      </div>
    );
  }

  return (
    <>
      {data?.data?.map((user) => (
        <div key={user.id}>
          <Link to={`/apiwithrq/${user.id}`}>
            <h3>Name: {user.name}</h3>
            <h5>email: {user.email}</h5>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
};

export default APIWithRQ;

// create a RQUserDetails component
// configure routing
// LINK tag - configure
