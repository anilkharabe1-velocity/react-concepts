import BasicComponent from "./BasicComponent";
import ChildComponent from "./ChildComponent";
import Counter from "./Counter";
import UserInput from "./UserInput";
import DarkMode from "./DarkMode";
import DarkModeParent from "./DarkModeParent";
import RegistrationForm from "./RegistrationForm";

const ParentComponent = () => {
  let obj = {
    name: "Rohan",
    age: 24,
    city: "Pune",
  };

  return (
    <>
      <BasicComponent />
      <hr></hr>
      <ChildComponent a={10} b={20} name="Rohan" data={obj} />
      <hr />
      <Counter></Counter>
      <hr></hr>
      <UserInput />
      <hr></hr>
      <DarkMode />
      <hr />
      <DarkModeParent />
      <hr></hr>
      <RegistrationForm />
    </>
  );
};
export default ParentComponent;
