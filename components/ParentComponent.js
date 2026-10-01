import BasicComponent from "./BasicComponent";
import ChildComponent from "./ChildComponent";
import UseStateParent from "./useState/UseStateParent";

import BasicUseEffect from "./useEffect/BasicUseEffect";
import UseEffectComponent from "./useEffect/UseEffectComponent";
import APIWithUseEffect from "./useEffect/APIWithUseEffect";

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
      {/* <UseStateParent /> */}
      {/* <BasicUseEffect /> */}

      <hr></hr>
      <UseEffectComponent />
      <hr></hr>
      <APIWithUseEffect />
    </>
  );
};
export default ParentComponent;
