import React from 'react';
import Tasks from './Tasks';
import AddButton from './Buttons/AddButton';

const Table = () => {
    return (
        <div className="m-10 w-[800px] overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-lg">
            <div className="mb-4">
                <h1 className="text-center font-mono text-2xl font-semibold text-gray-800">
                    My Tasks Today
                </h1>
            </div>

            <div className="prose prose-sm max-w-none">
                <Tasks />
            </div>
        </div>
    );
};

export default Table;
