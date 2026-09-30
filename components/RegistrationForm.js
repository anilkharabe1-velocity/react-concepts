import { useState } from "react";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    userName: "Rahul",
    age: "20",
    email: "rahul@gmail.com",
  });

  const handleChange = (event) => {
    console.log(event);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <input
        name="userName"
        placeholder="Enter Your Name"
        value={form.userName}
        onChange={handleChange}
      ></input>

      <input
        name="email"
        placeholder="Enter Your Email"
        value={form.email}
        onChange={handleChange}
      ></input>

      <input
        name="age"
        placeholder="Enter Your Age"
        value={form.age}
        onChange={handleChange}
      ></input>

      <h3>Name: {form.userName}</h3>
      <h3>Email: {form.email}</h3>
      <h3>Age: {form.age}</h3>
    </div>
  );
};

export default RegistrationForm;
