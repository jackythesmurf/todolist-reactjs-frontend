import axios from 'axios';
import { Task } from '../types/task';
import { API_URL } from './apiConfig';

export const updateTask = async (task: Task) => {
    const response = await axios.patch<Task>(
        `${API_URL}/${task.id}`,
        task,
    );
    return response.data;
};

