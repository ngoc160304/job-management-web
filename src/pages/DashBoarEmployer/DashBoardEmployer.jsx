import Box from '@mui/material/Box';
import Header from '../../components/Header/Admin/Header';
import { useEffect, useState } from 'react';
import { statisticByEmployerAPI } from '../../apis';
import Statistics from './Statistics/Statistics';
const DashBoardEmployer = () => {
  const [statistics, setStatistics] = useState(null);
  useEffect(() => {
    statisticByEmployerAPI().then((data) => {
      setStatistics(data);
    });
  }, []);
  return (
    <Box>
      <Header title={'DashBoard'} />
      {statistics !== null && <Statistics statistics={statistics} />}
    </Box>
  );
};
export default DashBoardEmployer;
