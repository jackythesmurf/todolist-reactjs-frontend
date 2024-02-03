import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './pages/Home';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Home />
            </div>
        </QueryClientProvider>
    );
}

export default App;
