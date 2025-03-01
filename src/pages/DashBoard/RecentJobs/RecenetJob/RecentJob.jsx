import styles from '../../DashBoard.module.css';
const RecentJob = () => {
  return (
    <tr>
      <td>#001</td>
      <td>Senior Developer</td>
      <td>Tech Company</td>
      <td>23/02/2025</td>
      <td>
        <span className={styles.status + ' ' + styles.status_active}>Đang tuyển</span>
      </td>
      <td>
        <div className={styles.table_actions}>
          <button className={styles.btn_action + ' ' + styles.btn_view}>
            <i className="fas fa-eye" />
          </button>
          <button className={styles.btn_action + ' ' + styles.btn_delete}>
            <i className="fas fa-trash" />
          </button>
        </div>
      </td>
    </tr>
  );
};
export default RecentJob;
