import { toast } from 'react-toastify';
import authorizeAxiosIntance from '../utils/authorizeAxios';
import { API_ROOT } from '../utils/constants';

/** Users */
export const registerUserAPI = async (data) => {
  const response = await authorizeAxiosIntance.post(`${API_ROOT}/v1/users/`, data);
  toast.success('Account created successfully!');
  return response.data;
};
export const refreshTokenAPI = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/users/refresh_token`);
  return response.data;
};
export const getListUserAdminAPI = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/users/admin/list-user`);
  return response.data;
};
/** Users */

/** Job Featured */
export const JobFeaturedAPI = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/jobs/user/list-jobs`);
  return response.data;
};
export const getListJobAdminAPI = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/jobs/admin/list-jobs`);
  return response.data;
};
/** Job Featured */

/** Statistics */
export const statisticsAPI = async () => {
  const response = await authorizeAxiosIntance.get(`${API_ROOT}/v1/users/admin/statistics`);
  return response.data;
};
/** Statistics */
