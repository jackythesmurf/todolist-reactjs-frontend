import { useQuery } from 'react-query';
import axios from 'axios';
import { Task } from '../types/task';
import { API_URL } from './apiConfig';

const axiosClient = axios.create({
    baseURL: API_URL, 
});

export const useGetAllTasks = () => {
    return useQuery<Task[], Error>('allTasks', async () => {
        const { data } = await axiosClient.get(''); 
        return data;
    });
};
