import { useQuery } from 'react-query';
import axios from 'axios';
import { Task } from '../types/task';

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:3000', 
});

export const useGetAllTasks = () => {
    return useQuery<Task[], Error>('task', async () => {
        const { data } = await axiosClient.get('/task');
        return data;
    });
};
