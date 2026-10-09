import { useEffect, useState } from "react";

const APIWithUseEffect = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    try {
      console.log("making api call");
      const jsonBuffer = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const response = await jsonBuffer.json();
      console.log("response", response);

      setTimeout(() => {
        setUsers(response);
      }, 5000);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
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
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h1> User Information</h1>
          <h3>Name: {user.name}</h3>
          <h5>email: {user.email}</h5>
          <hr />
        </div>
      ))}
    </>
  );

  //   if (!user.name) {
  //     return (
  //       <div>
  //         <h2>Loading...</h2>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h1> User Information</h1>
  //         <h3>Name: {user.name}</h3>
  //         <h5>email: {user.email}</h5>
  //       </div>
  //     );
  //   }
};

export default APIWithUseEffect;
