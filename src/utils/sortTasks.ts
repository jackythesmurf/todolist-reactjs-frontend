import { Task } from '../types/task';

export const sortTasks = (tasks: Task[], sortOption: string) => {
    switch (sortOption) {
        case 'startDate':
            return tasks.sort(
                (a, b) =>
                    new Date(a.startDate).getTime() -
                    new Date(b.startDate).getTime(),
            );
        case 'endDate':
            return tasks.sort(
                (a, b) =>
                    new Date(a.endDate).getTime() -
                    new Date(b.endDate).getTime(),
            );
        default:
            return tasks;
    }
};
