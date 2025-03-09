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
import CreateUser from './pages/UserManage/CreateUser/CreateForm.jsx';
import UserDetail from './pages/UserManage/_id.jsx';
import EditUser from './pages/UserManage/EditUser/EditForm.jsx';
import JobManage from './pages/JobMange/JobMange.jsx';
import EditJob from './pages/JobMange/EditJob/EditJob.jsx';
import ContractManage from './pages/ContractManage/ContractMange.jsx';
import EditContract from './pages/ContractManage/EditContract/EditContract.jsx';
import ComplainMangage from './pages/ComplainManage/ComplainManage.jsx';
import EditComplain from './pages/ComplainManage/EditComplain/EditComplain.jsx';
import DashBoardEmployer from './pages/DashBoarEmployer/DashBoardEmployer.jsx';
import CreateJob from './pages/JobManageEmployer/CreateJob/CreateJob.jsx';
import ContractEmployer from './pages/ContractEmployer/ContractEmployer.jsx';
import EditContractEmp from './pages/ContractEmployer/EditContract/EditContract.jsx';
import JobManageEmployer from './pages/JobManageEmployer/JobManageEmployer.jsx';
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
          <Route path="/admin/users/create" element={<CreateUser />} />
          <Route path="/admin/users/:id" element={<UserDetail />} />
          <Route path="/admin/users/edit/:id" element={<EditUser />} />
          <Route path="/admin/jobs/" element={<JobManage />} />
          <Route path="/admin/jobs/edit/:id" element={<EditJob />} />
          <Route path="/admin/contracts/" element={<ContractManage />} />
          <Route path="/admin/contracts/edit/:id" element={<EditContract />} />
          <Route path="/admin/complains/" element={<ComplainMangage />} />
          <Route path="/admin/complains/edit/:id" element={<EditComplain />} />
        </Route>
      </Route>
      <Route element={<PrivateRoute isAllowed={currentUser?.role === ROLE_USER.EMPLOYER} />}>
        <Route element={<AdminLayout />}>
          <Route path="/employer/dash-board" element={<DashBoardEmployer />} />
          <Route path="/employer/jobs" element={<JobManageEmployer />} />
          <Route path="/employer/create-job" element={<CreateJob />} />
          <Route path="/employer/contract" element={<ContractEmployer />} />
          <Route path="/employer/contract/edit/:id" element={<EditContractEmp />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
