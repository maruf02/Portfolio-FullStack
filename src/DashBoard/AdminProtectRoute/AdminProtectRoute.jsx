import { useAppSelector } from "../../Redux/hooks";
import {
  useCurrentToken,
  useCurrentUser,
} from "../../Redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const AdminProtectRoute = ({ children }) => {
  //   const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);
  const admin = useAppSelector(useCurrentUser);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  if (admin.role != "admin") {
    // dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default AdminProtectRoute;
