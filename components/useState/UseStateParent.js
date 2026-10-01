import Counter from "./Counter";
import UserInput from "./UserInput";
import DarkMode from "./DarkMode";
import DarkModeParent from "./DarkModeParent";
import RegistrationForm from "./RegistrationForm";

const UseStateParent = () => {
  return (
    <div>
      <h1>useState Hook</h1>
      <Counter />
      <UserInput />
      <DarkMode />
      <DarkModeParent />
      <RegistrationForm />
    </div>
  );
};

export default UseStateParent;
