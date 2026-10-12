import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const RQUserDetails = () => {
  const { userId } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => {
      return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    },
  });

  if (data) {
    console.log("data:", data.data);
  }

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
    <div>
      <h1> User Information in Details</h1>
      <h3>Name: {data.data.name}</h3>
      <h5>email: {data.data.email}</h5>
      <h5>Phone No: {data.data.phone}</h5>
      <hr />
    </div>
  );
  // https://jsonplaceholder.typicode.com/users/{dynamic value}
};

export default RQUserDetails;
