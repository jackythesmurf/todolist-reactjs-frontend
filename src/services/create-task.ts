import axios from 'axios';
import { Task } from '../types/task';
import { API_URL } from './apiConfig';

export const addTask = async (task: Omit<Task, 'id'>) => {
    const response = await axios.post<Task>(API_URL, task);
    return response.data;
};
