import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useMutation, useQueryClient } from 'react-query';

import { Task } from '../../types/task';
import { useGetAllTasks } from '../../services/get-all-task';
import { deleteTask } from '../../services/delete-task';
import { updateTask } from '../../services/update-task';

import DeleteButton from '../Buttons/DeleteButton';
import CompleteButton from '../Buttons/CompleteButton';
import SearchBar from '../SearchBar';
import SortButton from '../SelectOption/SortButton';

import { filterTasks } from '../../utils/filterTasks';
import { sortTasks } from '../../utils/sortTasks';
import TaskDetails from './TaskDetails';

const TasksList: React.FC = () => {
    const queryClient = useQueryClient();
    const { data: allTasks, isLoading, error } = useGetAllTasks();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState('endDate');

    const sortedAndFilteredTasks = useMemo(
        () =>
            filterTasks(
                sortTasks(allTasks || [], selectedOption),
                searchTerm,
            ),
        [searchTerm, allTasks, selectedOption],
    );

    const deleteMutation = useMutation(deleteTask, {
        onSuccess: () => queryClient.invalidateQueries('allTasks'),
    });

    const completeMutation = useMutation(updateTask, {
        onSuccess: () => queryClient.invalidateQueries('allTasks'),
    });

    const handleDelete = (taskId: string) =>
        deleteMutation.mutate(taskId);

    const handleComplete = (task: Task) => {
        completeMutation.mutate({
            ...task,
            finished: !task.finished,
        });
    };

    if (isLoading) return <div>Loading tasks...</div>;
    if (error)
        return <div>An error has occurred: {error.message}</div>;

    return (
        <div>
            <div className="flex items-center space-x-6">
                <div className='flex-grow'>
                   <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                /> 
                </div>
                <div className='flex-grow'>
                    <SortButton
                    handleSortOptionChange={setSelectedOption}
                />
                </div>
                
                
            </div>

            <div className="mx-auto max-w-4xl space-y-6 overflow-auto rounded-lg bg-gray-50 p-6 font-mono text-gray-700">
                {sortedAndFilteredTasks.map((task) => (
                    <motion.div
                        key={task.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 rounded-lg border border-gray-300 bg-white p-4 shadow-sm"
                    >
                        <TaskDetails task={task}/>
                        <div className="mt-2 flex space-x-4">
                            <div
                                onClick={() => handleDelete(task.id)}
                            >
                                <DeleteButton />
                            </div>
                            <div>
                                <CompleteButton
                                    isComplete={task.finished}
                                    onToggleComplete={() =>
                                        handleComplete(task)
                                    }
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TasksList;
