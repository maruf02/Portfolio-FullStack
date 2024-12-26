import { useAppDispatch } from "../../Redux/hooks";
import { logout } from "../../Redux/features/auth/authSlice";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const adminMenu = (
  <>
    <li>
      <NavLink to="/admin" className="activeNavLink ">
        <button>Dashboard</button>
      </NavLink>
    </li>
    <li>
      <NavLink to="/ManageSkill" className="activeNavLink ">
        <button>Manage Skill</button>
      </NavLink>
    </li>
    <li>
      <NavLink to="/ManageProject" className="activeNavLink ">
        <button>Manage Project</button>
      </NavLink>
    </li>
    <li>
      <NavLink to="/ManageBlog" className="activeNavLink ">
        <button>Manage Blogs</button>
      </NavLink>
    </li>
    {/* <li>
      <NavLink to="/DashBoard/ManageUsers" className="activeNavLink ">
        <button>User Management</button>
      </NavLink>
    </li> */}
    <li>
      <NavLink to="/" className="activeNavLink ">
        <button>Homepage</button>
      </NavLink>
    </li>
  </>
);

const NavBarMobile = () => {
  const dispatch = useAppDispatch();
  const user = useSelector((state) => state.auth.user);
  const { role, email } = user;
  const handleLogout = () => {
    console.log("object");
    dispatch(logout());
  };
  return (
    <div className="w-full">
      <div className="navbar  ">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl font-semibold">SpeedeRex</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end"></div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#295F98]  rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              <li>{email}</li>
              {role === "admin" && <>{adminMenu}</>}
              {/* {adminMenu} */}
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
