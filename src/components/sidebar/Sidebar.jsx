import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="top">
      <Link to="/">
        <span className="logo">Store</span>
      </Link>
    </div>
    <hr />
    <div className="center">
      <ul>
        <p className="title">MAIN</p>
        <li>
          <DashboardIcon className="icon"></DashboardIcon>
          <span>Dashboard</span>
        </li>
        <p className="title">LIST</p>
        <Link to="/users">
          <li>
            <PersonIcon className="icon"></PersonIcon>
            <span>Users</span>
          </li>
        </Link>
        <Link to="/products">
          <li>
            <PaymentIcon className="icon"></PaymentIcon>
            <span>Products</span>
          </li>
        </Link>
        <li>
          <StoreIcon className="icon"></StoreIcon>
          <span>Orders</span>
        </li>
        <p className="title">USER</p>
        <li>
          <AccountCircleOutlinedIcon className="icon"></AccountCircleOutlinedIcon>
          <span>Profile</span>
        </li>
        <li>
          <LogoutOutlinedIcon className="icon"></LogoutOutlinedIcon>
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className="bottom">
      <div className="colorOption"></div>
      <div className="colorOption"></div>
    </div>
  </div>
  );
};

export default Sidebar;