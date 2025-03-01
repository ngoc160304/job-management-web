import styles from '../../FeaturedJobs.module.css';

const Job = ({ job }) => {
  return (
    <div className={styles.job_card}>
      <div className={styles.job_company_logo}>
        <i className="fas fa-code" />
      </div>
      <h3 className={styles.job_title}>{job.title}</h3>
      <div className={styles.job_details}>
        <p>
          <i className="fas fa-building" /> Tech Solutions
        </p>
        <p>
          <i className="fas fa-map-marker-alt" /> {job.jobLocation}
        </p>
        <p>
          <i className="fas fa-dollar-sign" /> {job.salary} Dollars
        </p>
      </div>
      <div className={styles.job_tags}>
        {job.requirements.map((item) => (
          <span key={item} className={styles.job_tag}>
            {item}
          </span>
        ))}
      </div>
      <button className={styles.apply_button}>Ứng tuyển ngay</button>
    </div>
  );
};
export default Job;
