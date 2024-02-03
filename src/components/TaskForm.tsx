import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { addTask } from '../services/create-task';
import { Task } from '../types/task';

interface TaskFormData {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
}


const TaskForm: React.FC = ({}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TaskFormData>();
    const queryClient = useQueryClient();

    const mutation = useMutation(addTask, {
        onSuccess: (newTask) => {
            queryClient.setQueryData<Task[]>(
                'allTasks',
                (oldTasks) => [...(oldTasks || []), newTask],
            );

          
            const currentTasks =
                queryClient.getQueryData<Task[]>('allTasks');
            console.log(
                'Current tasks after mutation:',
                currentTasks,
            );
        },
    });

    const onSubmit = (data: TaskFormData) => {
        const task = {
            ...data,
            startDate: new Date(data.startDate),
            endDate: new Date(data.endDate),
            finished: false,
        };
        mutation.mutate(task);
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-lg bg-gray-50 p-6 shadow"
        >
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Name:
                </label>
                <input
                    id="name"
                    {...register('name', { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.name && (
                    <p className="mt-2 text-sm text-red-600">
                        Name is required.
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                >
                    Description:
                </label>
                <textarea
                    id="description"
                    {...register('description', { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.description && (
                    <p className="mt-2 text-sm text-red-600">
                        Description is required.
                    </p>
                )}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="startDate"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Start Date:
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        {...register('startDate', { required: true })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.startDate && (
                        <p className="mt-2 text-sm text-red-600">
                            Start Date is required.
                        </p>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="endDate"
                        className="block text-sm font-medium text-gray-700"
                    >
                        End Date:
                    </label>
                    <input
                        type="date"
                        id="endDate"
                        {...register('endDate', { required: true })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.endDate && (
                        <p className="mt-2 text-sm text-red-600">
                            End Date is required.
                        </p>
                    )}
                </div>
            </div>
            <button
                type="submit"
                disabled={mutation.isLoading}
                className="rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
            >
                Add Task
            </button>
            {mutation.isError && (
                <p className="mt-2 text-sm text-red-600">
                    An error occurred
                </p>
            )}
        </form>
    );
};

export default TaskForm;
