import Applications from './Applications/Applications';
import Complains from './Complains/Complains';
import JobRecruitings from './JobRecruitings/JobRecruitings';
import Users from './Users/User';
import styles from '../DashBoard.module.css';
import { useEffect, useState } from 'react';
import { statisticsAPI } from '../../../apis';

const Statistics = () => {
  const [statistics, setStatistics] = useState(null);
  useEffect(() => {
    statisticsAPI().then((statistics) => {
      setStatistics(statistics);
    });
  }, []);
  return (
    <div className={styles.stats_grid}>
      {statistics && (
        <>
          <Users users={statistics?.users} />
          <JobRecruitings jobs={statistics?.jobs} />
          <Applications candidates={statistics?.candidates} />
          <Complains complains={statistics?.complains} />
        </>
      )}
    </div>
  );
};
export default Statistics;
