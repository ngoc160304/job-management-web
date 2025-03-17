import authorizeAxiosIntance from '../utils/authorizeAxios';
import { API_ROOT, STATUS } from '../utils/constants';

/** Users */
export const registerUserAPI = async (data) => {
  const response = await authorizeAxiosIntance.post(`${API_ROOT}/v1/auth/`, data);
  return response.data;
};
export const refreshTokenAPI = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/auth/refresh_token`);
  return response.data;
};
export const getListUserAdminAPI = async (limit = 10) => {
  let query = `?limit=${limit}`;
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/users${query}`);
  return response.data;
};
export const deleteUserAdminAPI = async (id) => {
  const response = await authorizeAxiosIntance.delete(`${API_ROOT}/v1/users/delete/${id}`);
  return response.data;
};
export const getListEmployer = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/users/list-employer`);
  return response.data;
};
export const createUserByAdmin = async (data) => {
  const response = await authorizeAxiosIntance.post(`${API_ROOT}/v1/users/admin/create`, data);
  return response.data;
};
export const getUserDetail = async (id) => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/users/details/${id}`);
  return response.data;
};
export const updateUser = async (id, data) => {
  const response = await authorizeAxiosIntance.put(`${API_ROOT}/v1/users/edit/${id}`, data);
  return response.data;
};
/** Users */

/** Job */
export const getListJobByUserAPI = async (limit, skills, workLocation, salary) => {
  limit = limit || 3;
  let query = `?limit=${limit}`;
  if (skills) {
    query += `&skills=${skills}`;
  }
  if (workLocation) {
    query += `&workLocation=${workLocation}`;
  }
  if (salary) {
    query += `&salary=${salary}`;
  }
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/jobs/user/list-jobs${query}`);
  return response.data;
};
export const getListJobAdminAPI = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/jobs/admin/list-jobs`);
  return response.data;
};
export const getListJobEmployerAPI = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/jobs/list-jobs`);
  return response.data;
};
export const deleteJob = async (id) => {
  const response = await authorizeAxiosIntance.delete(`${API_ROOT}/v1/jobs//delete/${id}`);
  return response.data;
};
export const getDetailsJob = async (id) => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/jobs/details/${id}`);
  return response.data;
};
export const changeStatusJob = async (id, status) => {
  const response = await authorizeAxiosIntance.get(
    `${API_ROOT}/v1/jobs/admin/chang-status/${id}?status=${status}`
  );
  return response.data;
};
export const createJobAPI = async (data) => {
  const response = await authorizeAxiosIntance.post(`${API_ROOT}/v1/jobs`, data);
  return response.data;
};
export const getJobDetailsJobByUserAPI = async (id) => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/jobs/user/details/${id}`);
  return response.data;
};
export const updateJobAPI = async (id, data) => {
  const response = await authorizeAxiosIntance.put(`${API_ROOT}/v1/jobs/update/${id}`, data);
  return response.data;
};
/** Job */

/** Dash board */
export const statisticsAPI = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/users/statistic`);
  return response.data;
};
/** Dash board */

/** Contract */
export const getListContractAPI = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/contracts`);
  return response.data;
};
export const deleteContractAPI = async (id) => {
  const response = await authorizeAxiosIntance.delete(`${API_ROOT}/v1/contracts/delete/${id}`);
  return response.data;
};
export const changeStatusContractAPI = async (id, status) => {
  const response = await authorizeAxiosIntance.put(
    `${API_ROOT}/v1/contracts/change-status/${id}?status=${status}`
  );
  return response.data;
};
export const getContractDetailsAPI = async (id) => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/contracts/details/${id}`);
  return response.data;
};
export const getContractDetailsByEmpAPI = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/contracts/employer`);
  return response.data;
};
export const createContractAPI = async (data) => {
  const response = await authorizeAxiosIntance.post(`${API_ROOT}/v1/contracts/`, data);
  return response.data;
};
export const editContractAPI = async (id, data) => {
  const response = await authorizeAxiosIntance.put(`${API_ROOT}/v1/contracts/edit/${id}`, data);
  return response.data;
};
/** Contract */

/** Complain */
export const getListComplainAPI = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/complains/`);
  return response.data;
};
export const resolveComplainAPI = async (id) => {
  const response = await authorizeAxiosIntance.put(`${API_ROOT}/v1/complains/resolve/${id}`);
  return response.data;
};
export const getComplainDetailAPI = async (id) => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/complains/details/${id}`);
  return response.data;
};
/** Complain */

/** Employer */
export const statisticByEmployerAPI = async () => {
  const response = await authorizeAxiosIntance.get(
    `${API_ROOT}/v1/users/employer/statistic?statusJob=${STATUS.ACCEPT}`
  );
  return response.data;
};
/** Employer */

/** Candidate */
export const applyJobAPI = async (data) => {
  const response = await authorizeAxiosIntance.post(`${API_ROOT}/v1/candidates`, data);
  return response.data;
};
export const getListCandidatesAPI = async (query = '') => {
  const response = await authorizeAxiosIntance.get(
    `${API_ROOT}/v1/candidates/list-candidate?${query}`
  );
  return response.data;
};
export const deleteCandidateAPI = async (id) => {
  const response = await authorizeAxiosIntance.delete(`${API_ROOT}/v1/candidates/delete/${id}`);
  return response.data;
};
export const getCandidateDetailsAPI = async (id) => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/candidates/details/${id}`);
  return response.data;
};
export const changeStatusCandiateAPI = async (status, id, email) => {
  const response = await authorizeAxiosIntance.put(
    `${API_ROOT}/v1/candidates/change-status/${status}/${id}/${email}`
  );
  return response.data;
};
/** Candidate */
