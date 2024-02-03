import React from 'react';
import { Task } from '../types/task';
import { useGetAllTasks } from '../services/get-all-task'; // Adjust the import path as necessary
import { format } from 'date-fns';
import { motion } from 'framer-motion';


const Tasks: React.FC = () => {
    const { data: allTasks, isLoading, error } = useGetAllTasks();

    if (isLoading) return <div>Loading tasks...</div>;
    if (error)
        return <div>An error has occurred: {error.message}</div>;

    return (
        <div className="mx-auto max-w-4xl space-y-4 overflow-auto rounded-lg bg-gray-50 p-6 font-mono text-gray-700">
            {allTasks?.map((task, index) => (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 rounded-lg border border-gray-300 bg-white p-4 shadow-sm"
                    key={task.id}
                >
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-xl font-semibold">
                                {task.name}
                            </h1>
                            <p className="text-sm">
                                Due: {format(task.endDate, 'Pp')}
                            </p>
                            <div className="mt-2">
                                bruh
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 flex space-x-4">
                        <button>Delete</button>
                        <button>Edit</button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Tasks;