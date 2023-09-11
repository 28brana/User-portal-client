import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutReducer } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { List, X } from "phosphor-react";

const Header = () => {
  const [open, setOpen] = useState(false);

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
  useEffect(() => {
    if (data.email === "") {
      console.log("worked");
      navagation("/auth/login");
    }
  }, [data, navagation]);
  return (
    <div className="flex items-center justify-between border mb-4 py-4 md:px-14 px-4">
      <p className="text-2xl font-semibold">👦User Dashboard</p>
      <div className="gap-10 md:flex [display:none]">
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
        className="styled-button md:block [display:none] text-lg px-6 py-2"
        onClick={() => {
          dispatch(logoutReducer());
        }}
      >
        Logout
      </button>
      <div
        className="md:[display:none] block"
        onClick={() => {
          setOpen(true);
        }}
      >
        <List size={28} />
      </div>

      {open && (
        <div className="md:[display:none] block fixed top-0 left-0 h-screen w-screen bg-white">
          <div
            className="absolute right-4 top-11"
            onClick={() => {
              setOpen(false);
            }}
          >
            <X size={24} weight="bold" />
          </div>
          <p className="text-3xl my-10 text-center">Menu</p>
          <div className="container mx-auto flex flex-col justify-center  pt-10 gap-4  ">
            {links.map((link) => (
              <Link
                key={link.name}
                className={`${currentPath === link.path ? "text-blue-600":"text-black"}`}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
             <button
        className="styled-button mt-10 text-lg px-6 py-2"
        onClick={() => {
          dispatch(logoutReducer());
        }}
      >
        Logout
      </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
