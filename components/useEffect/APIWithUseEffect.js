import { useEffect, useState } from "react";
import { useState } from "react";

const APIWithUseEffect = () => {
  const [user, setUser] = useState({});
  console.log("re-rendering");

  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    console.log("making api call");
    const jsonBuffer = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    const response = await jsonBuffer.json();
    console.log("response", response);

    setTimeout(() => {
      setUser(response);
    }, 5000);
  }

  return !user.name ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : (
    <div>
      <h1> User Information</h1>
      <h3>Name: {user.name}</h3>
      <h5>email: {user.email}</h5>
    </div>
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
