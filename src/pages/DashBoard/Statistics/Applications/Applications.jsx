import styles from '../../DashBoard.module.css';

const Applications = ({ candidates }) => {
  return (
    <div className={styles.stat_card}>
      <div className={styles.stat_icon + ' ' + styles.stat_applications}>
        <i className="fas fa-file-alt" />
      </div>
      <div className={styles.stat_value}>{candidates}</div>
      <div className={styles.stat_label}>Đơn ứng tuyển</div>
    </div>
  );
};
export default Applications;
