import { useEffect, useState } from "react";

const User = ({ name, city }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(0);

  const [userData, setUserData] = useState({
    name: "Dummy Name",
    address: {
      city: "Dummy City",
    },
    phone: "+9 023923627365",
  });

  useEffect(() => {
    getAPIData();
  }, []);

  async function getAPIData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const response = await res.json();
    console.log("response in function based component:", response);
    setUserData(response);
  }

  return (
    <div>
      <h2>Name: {userData.name}</h2>
      <h3>City: {userData.address.city}</h3>
      <h4>Contact: {userData.phone}</h4>
      <h4>Counter: {count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Counter
      </button>
    </div>
  );
};

export default User;
