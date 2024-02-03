import { Task } from '../types/task';

export const filterTasks = (tasks: Task[], searchTerm: string) => {
    return searchTerm
        ? tasks.filter((task) =>
              task.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()),
          )
        : tasks;
};
