import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/task';

export const deleteTask = async (taskId: string): Promise<string> => {
    await axios.delete(`${API_URL}/${taskId}`);
    return taskId; 
};

