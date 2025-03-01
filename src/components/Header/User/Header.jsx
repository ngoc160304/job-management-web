import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/User/userSlice';
import Profile from './Menus/Profile';
const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="#" className={styles.logo}>
          <i className="fas fa-briefcase" />
          JobPortal
        </Link>
        <div className={styles.nav_links}>
          <Link to="#employers">
            <i className="fas fa-building" /> Nhà tuyển dụng
          </Link>
          {currentUser == null ? (
            <>
              <Link to="/login">
                <i className="fas fa-sign-in-alt" /> Đăng nhập
              </Link>
              <Link to="/register">
                <i className="fas fa-user-plus" /> Đăng ký
              </Link>
            </>
          ) : (
            <Profile user={currentUser} />
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
