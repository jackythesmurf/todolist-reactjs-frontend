import axios from 'axios';
import { Task } from '../types/task';

const API_URL = 'http://127.0.0.1:3000/task';

export const updateTask = async (task: Task) => {
    const response = await axios.patch<Task>(
        `${API_URL}/${task.id}`,
        task,
    );
    return response.data;
};

