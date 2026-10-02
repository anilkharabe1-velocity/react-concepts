import BasicComponent from "./BasicComponent";
import ChildComponent from "./ChildComponent";
import UseStateParent from "./useState/UseStateParent";

import BasicUseEffect from "./useEffect/BasicUseEffect";
import UseEffectComponent from "./useEffect/UseEffectComponent";
import APIWithUseEffect from "./useEffect/APIWithUseEffect";

import User from "./classBasedComponent/User";
import UserClass from "./classBasedComponent/UserClass";

const ParentComponent = () => {
  let obj = {
    name: "Rohan",
    age: 24,
    city: "Pune",
  };

  return (
    <>
      {/* <BasicComponent /> */}
      <hr></hr>
      {/* <ChildComponent a={10} b={20} name="Rohan" data={obj} /> */}

      <hr />
      {/* <UseStateParent /> */}
      {/* <BasicUseEffect /> */}

      <hr></hr>
      {/* <UseEffectComponent /> */}
      <hr></hr>
      {/* <APIWithUseEffect /> */}

      <User name={"Saee -  (Function)"} city={"New Delhi"} />
      <hr />
      <UserClass name={"Gauri -  (class)"} city={"New Mumbai"} />
    </>
  );
};
export default ParentComponent;
