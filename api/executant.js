import { axiosAuth } from '@lib';

export const updateTask = ({ id, data }) => {
  return axiosAuth.put(`/executant/task/${id}`, data);
};
