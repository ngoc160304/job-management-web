import Job from './Job/Job';

const ListJob = (listJob) => {
  return (
    <tbody>
      {listJob.map((job, index) => (
        <Job key={job._id} job={job} order={index} />
      ))}
    </tbody>
  );
};
export default ListJob;
