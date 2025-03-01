import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import NotFound from './pages/404/NotFound.jsx';
import Auth from './pages/Auth/Auth.jsx';
import { selectCurrentUser } from './redux/User/userSlice.js';
import './App.css';
import Home from './pages/Home/Home.jsx';
import DashBoard from './pages/DashBoard/DashBoard.jsx';
import AdminLayout from './components/Layouts/AdminLayout.jsx';
import { useSelector } from 'react-redux';
import { ROLE_USER } from './utils/constants.js';
import UserMange from './pages/UserManage/UserManage.jsx';
// import CreateForm from './pages/UserManage/CreateForm/CreateForm.jsx';
const PrivateRoute = ({ isAllowed, redirectPath = '/login' }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
function App() {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<PrivateRoute isAllowed={currentUser?.role === ROLE_USER.ADMIN} />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dash-board" element={<DashBoard />} />
          <Route path="/admin/users" element={<UserMange />} />
          {/* <Route path="/admin/users/create" element={<CreateForm />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
