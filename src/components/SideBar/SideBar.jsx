import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';
import { useEffect, useState } from 'react';
const SideBar = () => {
  const [path, setPath] = useState('');
  useEffect(() => {
    setPath(location.pathname);
  }, []);
  const customCssLink = (path, linkActive) => {
    if (path.includes(linkActive)) {
      return `${styles.nav_link} ${styles.active}`;
    } else {
      return `${styles.nav_link}`;
    }
  };
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <div className={styles.logo}>
          <i className="fas fa-briefcase" />
          JobPortal Admin
        </div>
      </div>
      <ul className={styles.nav_menu}>
        <li
          className={styles.nav_item}
          onClick={() => {
            setPath(location.pathname);
          }}
        >
          <Link to="/admin/dash-board" className={customCssLink(path, 'dash-board')}>
            <i className="fas fa-home" />
            Dashboard
          </Link>
        </li>
        <li
          className={styles.nav_item}
          onClick={() => {
            setPath(location.pathname);
          }}
        >
          <Link to="/admin/users" className={customCssLink(path, 'users')}>
            <i className="fas fa-users" />
            Quản lý người dùng
          </Link>
        </li>
        <li
          className={styles.nav_item}
          onClick={() => {
            setPath(location.pathname);
          }}
        >
          <Link to="/admin/jobs" className={customCssLink(path, 'jobs')}>
            <i className="fas fa-briefcase" />
            Quản lý việc làm
          </Link>
        </li>
        <li
          className={styles.nav_item}
          onClick={() => {
            setPath(location.pathname);
          }}
        >
          <Link to="/admin/contracts" className={customCssLink(path, 'applications')}>
            <i className="fas fa-file-alt" />
            Quản lý hợp đồng
          </Link>
        </li>
        <li
          className={styles.nav_item}
          onClick={() => {
            setPath(location.pathname);
          }}
        >
          <Link to="/admin/complains" className={customCssLink(path, 'complains')}>
            <i className="fas fa-exclamation-circle" />
            Khiếu nại
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default SideBar;
