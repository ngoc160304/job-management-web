import styles from '../../DashBoard.module.css';
const Users = ({ users }) => {
  return (
    <div className={styles.stat_card}>
      <div className={styles.stat_icon + ' ' + styles.stat_users}>
        <i className="fas fa-users" />
      </div>
      <div className={styles.stat_value}>{users - 1}</div>
      <div className={styles.stat_label}>Tổng người dùng</div>
    </div>
  );
};

export default Users;
