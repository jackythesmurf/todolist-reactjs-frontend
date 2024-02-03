import axios from 'axios';
import { Task } from '../types/task';

const API_URL = 'http://127.0.0.1:3000/task';

export const addTask = async (task: Omit<Task, 'id'>) => {
    const response = await axios.post<Task>(API_URL, task);
    return response.data;
};
