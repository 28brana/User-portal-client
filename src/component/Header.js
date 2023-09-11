import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutReducer } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const data = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const navagation = useNavigate();

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Edit Profile",
      path: "/edit-profile",
    },
    {
      name: "Change Password",
      path: "/change-password",
    },
  ];
  useEffect(()=>{
    if (data.email==='') {
      console.log('worked')
      navagation("/auth/login");
    }
  },[data, navagation])
  return (
    <div className="flex items-center justify-between border mb-4 py-4 px-14">
      <p className="text-2xl font-semibold">👦User Dashboard</p>
      <div className="flex gap-10">
        {links.map((link) => (
          <Link
            key={link.name}
            className={`${currentPath === link.path && "text-blue-600"}`}
            to={link.path}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <button
        className="styled-button text-lg px-6 py-2"
        onClick={() => {
          dispatch(logoutReducer());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
