import axios from 'axios';
import { API_URL } from './apiConfig';

export const deleteTask = async (taskId: string): Promise<string> => {
    await axios.delete(`${API_URL}/${taskId}`);
    return taskId; 
};

