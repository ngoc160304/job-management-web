import styles from '../../DashBoard.module.css';

const Complains = ({ complains }) => {
  return (
    <div className={styles.stat_card}>
      <div className={styles.stat_icon + ' ' + styles.stat_reports}>
        <i className="fas fa-exclamation-circle" />
      </div>
      <div className={styles.stat_value}>{complains}</div>
      <div className={styles.stat_label}>Khiếu nại chờ xử lý</div>
    </div>
  );
};
export default Complains;
