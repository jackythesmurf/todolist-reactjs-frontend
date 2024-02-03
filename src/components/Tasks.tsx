import React, { useState, useMemo } from 'react';
import { useGetAllTasks } from '../services/get-all-task';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import DeleteButton from './Buttons/DeleteButton';
import EditButton from './Buttons/EditButton';
import SearchBar from './Buttons/SearchBar';
import { useMutation, useQueryClient } from 'react-query';
import { deleteTask } from '../services/delete-task';
import { Task } from '../types/task';

const Tasks: React.FC = () => {
    const queryClient = useQueryClient();
    const { data: allTasks, isLoading, error } = useGetAllTasks();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTasks = useMemo(() => {
        return searchTerm
            ? allTasks?.filter((task) =>
                  task.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()),
              )
            : allTasks;
    }, [searchTerm, allTasks]);

    const deleteMutation = useMutation(deleteTask, {
        onSuccess: (deletedTaskId) => {
            queryClient.setQueryData<Task[]>(
                'allTasks',
                (oldTasks) => {
                    const filteredTasks =
                        oldTasks?.filter(
                            (task) => task.id !== deletedTaskId,
                        ) || [];

                    return filteredTasks;
                },
            );
        },
    });

    const handleDelete = (taskId: string) => {
        deleteMutation.mutate(taskId);
    };

    if (isLoading) return <div>Loading tasks...</div>;
    if (error)
        return <div>An error has occurred: {error.message}</div>;

    return (
        <div>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <div className="mx-auto max-w-4xl space-y-4 overflow-auto rounded-lg bg-gray-50 p-6 font-mono text-gray-700">
                {filteredTasks?.map((task) => (
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
                                    {task.description}
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 flex space-x-4">
                            <div
                                onClick={() => handleDelete(task.id)}
                            >
                                <DeleteButton />
                            </div>

                            <EditButton />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;
