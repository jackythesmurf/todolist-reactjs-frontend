import React from 'react'
import Table from '../components/Table'
import TaskPage from './TaskPage';

const Home = () => {
  return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <div>
              <TaskPage/>
          </div>
      </div>
  );
}

export default Home