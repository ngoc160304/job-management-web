import { Box } from '@mui/material';
import Header from '../../components/Header/User/Header';
import Footer from '../../components/Footer/Footer';
import FormSearchJob from '../../components/FormSearchJob/FormSearchJon';
import { useEffect, useState } from 'react';
import { getListJobByUserAPI } from '../../apis';
import JobItem from '../../components/JobItem/JobItem';
const Search = () => {
  const skills = JSON.parse(localStorage.getItem('skills'));
  const salary = JSON.parse(localStorage.getItem('salary'));
  const workLocation = JSON.parse(localStorage.getItem('workLocation'));
  const [listJob, setListJob] = useState(null);
  useEffect(() => {
    getListJobByUserAPI(10, skills, workLocation, salary).then((data) => {
      setListJob(data.jobs);
    });
  }, [skills, workLocation, salary]);
  return (
    <Box>
      <Header />
      <Box
        sx={{
          mt: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      ></Box>
      <Box
        sx={{
          mt: 4,
          bgcolor: 'white',
          padding: 4
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <FormSearchJob />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            padding: '10px',
            gap: '10px'
          }}
        >
          {listJob ? (
            listJob.map((job) => (
              <Box
                key={job._id}
                sx={{
                  flex: 1
                }}
              >
                <JobItem job={job} />
              </Box>
            ))
          ) : (
            <></>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default Search;
