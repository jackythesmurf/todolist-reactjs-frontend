import { format } from "date-fns";
import { Task } from "../../types/task";
import Description from "../Description";

interface TaskDetailsProps {
    task: Task
}

const TaskDetails: React.FC<TaskDetailsProps> = ({task}) => {
    return (
        <div>
            <div>
                <h1 className="text-xl font-semibold">{task.name}</h1>
                <p className="text-sm">
                    <strong className="text-blue-500">Start:</strong>{' '}
                    {format(new Date(task.startDate), 'Pp')} |{' '}
                    <strong className="text-blue-500">Due:</strong>{' '}
                    {format(new Date(task.endDate), 'Pp')}
                </p>
                <Description description={task.description} />
            </div>
        </div>
    );
};

export default TaskDetails