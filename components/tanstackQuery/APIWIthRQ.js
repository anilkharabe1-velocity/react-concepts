import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
          <h1> User Information</h1>
          <h3>Name: {user.name}</h3>
          <h5>email: {user.email}</h5>
          <hr />
        </div>
      ))}
    </>
  );
};

export default APIWithRQ;
