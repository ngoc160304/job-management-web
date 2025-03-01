import { useEffect, useState } from 'react';
import styles from './FeaturedJobs.module.css';
import ListJobs from './ListJobs/ListJobs';
import { JobFeaturedAPI } from '../../../apis';
const FeaturedJobs = () => {
  const [listJobs, setListJobs] = useState(null);
  useEffect(() => {
    JobFeaturedAPI().then((res) => {
      setListJobs(res.jobs);
    });
  }, []);
  return (
    <section className={styles.jobs_section}>
      <div className={styles.jobs_container}>
        <h2 className={styles.section_title}>Việc làm nổi bật</h2>
        <div className={styles.jobs_grid}>{listJobs && <ListJobs listJobs={listJobs} />}</div>
      </div>
    </section>
  );
};
export default FeaturedJobs;
