import { axiosAuth } from '@lib';

export const addTask = (data) => {
  return axiosAuth.post('/manager/task', data);
};

export const updateTask = ({ id, data }) => {
  return axiosAuth.put(`/manager/task/${id}`, data);
};
