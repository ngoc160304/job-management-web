import styles from '../../DashBoard.module.css';

const JobRecruitings = ({ jobs }) => {
  return (
    <div className={styles.stat_card}>
      <div className={styles.stat_icon + ' ' + styles.stat_jobs}>
        <i className="fas fa-briefcase" />
      </div>
      <div className={styles.stat_value}>{jobs}</div>
      <div className={styles.stat_label}>Việc làm đang tuyển</div>
    </div>
  );
};
export default JobRecruitings;
