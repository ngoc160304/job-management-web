import RecentJob from './RecenetJob/RecentJob';
import styles from '../DashBoard.module.css';

const RecentJobs = () => {
  return (
    <div className={styles.data_section}>
      <div className={styles.section_header}>
        <h3 className={styles.section_title}>Việc làm mới đăng</h3>
      </div>
      <table className={styles.data_table}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Công ty</th>
            <th>Ngày đăng</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <RecentJob />
        </tbody>
      </table>
    </div>
  );
};
export default RecentJobs;
