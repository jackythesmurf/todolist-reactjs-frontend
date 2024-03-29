// TaskPage Component
import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import Modal from '../components/Model';
import Table from '../components/Table';
import AddButton from '../components/Buttons/AddButton';

const TaskPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => setIsFormOpen(!isFormOpen);

    return (
        <div>
            <div className="mt-8 flex items-center justify-center space-x-4">
                <AddButton toggleForm={toggleForm} />
            </div>
            <Table />
            <Modal isOpen={isFormOpen} onClose={toggleForm}>
                <TaskForm onClose={toggleForm} />{' '}
            </Modal>
        </div>
    );
};

export default TaskPage;
