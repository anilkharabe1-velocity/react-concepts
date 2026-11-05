import User from "./User";
import withStyle from "./withStyle";

// component
const EnhancedUser = withStyle(User);

const ParentComponent = () => {
  return (
    <div>
      <User name="Abhishek" />
      <EnhancedUser name="Amar" />
    </div>
  );
};

export default ParentComponent;
