import { RiUser6Line } from "react-icons/ri";
const UserMenu = () => {
  return (
    <div className="w-10 h-10 flex justify-start">
      <button className="w-full h-full hidden">
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          className="rounded-full w-10 h-10"
        />
      </button>
    </div>
  );
};

export default UserMenu;
