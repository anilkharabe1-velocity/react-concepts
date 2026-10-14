import { useRef } from "react";

const StudentForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);

  console.log("re-render useRef");

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      age: ageRef.current.value,
    };

    console.log("studentData", studentData);
  };

  return (
    <>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name</label>
          <input
            type="text"
            ref={nameRef}
            placeholder="Enter your name"
            required
          ></input>
          <br />

          <label>Email</label>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your email"
            required
          ></input>
          <br />

          <label>Age</label>
          <input
            type="number"
            ref={ageRef}
            placeholder="Enter your age"
            required
          ></input>
          <br />
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default StudentForm;
