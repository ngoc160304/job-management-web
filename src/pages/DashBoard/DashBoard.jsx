import Box from '@mui/material/Box';
import Header from '../../components/Header/Admin/Header';
import Statistics from './Statistics/Statistics';
import TableUser from '../../components/TableUser/TableUser';
import TableJobs from '../../components/TableJobs/TableJobs';
import { useEffect, useState } from 'react';
import { getListJobAdminAPI, getListUserAdminAPI } from '../../apis';
import PageLoadingSpinner from '../../components/Loading/PageLoadingSpinner';

const DashBoard = () => {
  const [listUser, setListUser] = useState(null);
  const [listJob, setListJob] = useState(null);
  useEffect(() => {
    fetchApiUser();
    fetchApiJob();
  }, []);
  const fetchApiUser = async () => {
    const users = await getListUserAdminAPI();
    setListUser(users);
  };
  const fetchApiJob = async () => {
    const jobs = await getListJobAdminAPI();
    setListJob(jobs.jobs);
  };
  return (
    <Box>
      <Header title={'DashBoard'} />
      <Statistics />
      {listUser !== null ? (
        <TableUser title={'Người dùng mới'} listUser={listUser} />
      ) : (
        <Box
          sx={{
            width: 'calc(100vw - 250px)',
            display: 'flex',
            alignItems: 'center',
            padding: '36px 0',
            flexWrap: 'nowrap',
            gap: 2,
            justifyContent: 'center'
          }}
        >
          <PageLoadingSpinner caption={'Loading list user recent...'} />
        </Box>
      )}
      {listJob !== null ? (
        <TableJobs title={'Danh sách việc làm mới đăng'} listJob={listJob} />
      ) : (
        <Box
          sx={{
            width: 'calc(100vw - 250px)',
            display: 'flex',
            alignItems: 'center',
            padding: '36px 0',
            flexWrap: 'nowrap',
            gap: 2,
            justifyContent: 'center'
          }}
        >
          <PageLoadingSpinner caption={'Loading list job recent...'} />
        </Box>
      )}
    </Box>
  );
};
export default DashBoard;
