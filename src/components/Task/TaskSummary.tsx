import { format } from "date-fns";
import { Task } from "../../types/task";
import TaskDescription from './TaskDescription';

interface TaskSummaryProps {
    task: Task
}

const TaskSummary: React.FC<TaskSummaryProps> = ({task}) => {
    return (
        <div>
            <div>
                <h1 className="text-xl font-semibold">{task.name}</h1>
                <p className="text-sm">
                    <strong className="text-blue-500">Start:</strong>{' '}
                    {format(new Date(task.startDate), 'dd/MM/yyyy')} |{' '}
                    <strong className="text-blue-500">Due:</strong>{' '}
                    {format(new Date(task.endDate), 'dd/MM/yyyy')}
                </p>
                <TaskDescription description={task.description} />
            </div>
        </div>
    );
};

export default TaskSummary;