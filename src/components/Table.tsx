import TasksList from './Task/TasksList';

const Table = () => {
    return (
        <div className="m-10 w-[800px] overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-lg">
            <div className="mb-4">
                <h1 className="text-center font-mono text-2xl font-semibold text-gray-800">
                    My Tasks
                </h1>
            </div>
            <TasksList />
        </div>
    );
};

export default Table;
