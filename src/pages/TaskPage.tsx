import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import Modal from '../components/Model';
import Table from '../components/Table';
import AddButton from '../components/Buttons/AddButton';

const TaskPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => setIsFormOpen(!isFormOpen);

    return (
        <div>
            <div className="mb-4 flex items-center justify-center space-x-4">
                <AddButton toggleForm={toggleForm} />
                <button>Button</button>
            </div>

            <Table />

            <Modal isOpen={isFormOpen} onClose={toggleForm}>
                <TaskForm />
            </Modal>
        </div>
    );
};

export default TaskPage;
