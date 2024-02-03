// components/SearchBar.tsx
import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
    searchTerm,
    setSearchTerm,
}) => {
    return (
        <div className="ml-6">
            <div className="flex w-full overflow-hidden rounded border-2 shadow-sm">
                <span className="flex items-center justify-center bg-gray-100 px-4 text-gray-600">
                    <SearchIcon className="h-5 w-5" />
                </span>
                <input
                    type="text"
                    className="w-full px-4 py-2"
                    placeholder="live-search by task name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchBar;
