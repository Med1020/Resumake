
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.authSlice);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
