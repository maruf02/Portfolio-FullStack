import { useState } from "react";
import {
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import { Button, Menu } from "antd";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../Redux/hooks";
import { logout } from "../../Redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

// type adminMenuItem = Required<MenuProps>["adminItems"][number];
// type userMenuItem = Required<MenuProps>["userItems"][number];

const adminItems = [
  { key: "1", icon: <PieChartOutlined />, label: "Dashboard" },
  { key: "2", icon: <DesktopOutlined />, label: "Manage Skill" },
  { key: "3", icon: <DesktopOutlined />, label: "Manage Project" },
  { key: "4", icon: <DesktopOutlined />, label: "Manage Blogs" },
  // { key: "5", icon: <DesktopOutlined />, label: "User Management" },
  // { key: "6", icon: <DesktopOutlined />, label: "Report" },
  { key: "7", icon: <DesktopOutlined />, label: "Homepage" },
  // { key: "7", icon: <DesktopOutlined />, label: "imageUP" },
];

const NavBarDashBoard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const { role, email } = user;
  console.log(role, email);

  const handleLogout = () => {
    console.log("object");
    dispatch(logout());
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleAdminMenuClick = (e) => {
    const { key } = e;
    switch (key) {
      case "1":
        navigate("/admin");
        break;
      case "2":
        navigate("/ManageSkill");
        break;
      case "3":
        navigate("/ManageProject");
        break;
      case "4":
        navigate("/ManageBlog");
        break;
      case "5":
        navigate("/DashBoard/ManageUsers");
        break;
      case "6":
        navigate("/DashBoard/ReportGenerate");
        break;
      case "7":
        navigate("/");
        break;
      // case "7":
      //   navigate("/DashBoard/imageUP");
      //   break;
      // Add more cases for other menu items if needed
      default:
        break;
    }
  };

  return (
    <div>
      <div></div>
      <div className="hidden lg:block">
        {role === "admin" && (
          <div>
            <div className="pt-2 pb-0">
              <section className="text-3xl font-bold text-center justify-center align-middle">
                Admin DashBoard
              </section>
              <section className="text-md font-semibold text-center">
                Hello: {email}
              </section>
              <section className="text-md font-semibold text-center pt-2">
                <Button onClick={handleLogout} type="primary" danger>
                  Logout
                </Button>
              </section>
            </div>
            <div style={{ width: 256 }}>
              <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{ marginBottom: 16, backgroundColor: "#48CFCB" }}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
                items={adminItems}
                onClick={handleAdminMenuClick}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarDashBoard;
