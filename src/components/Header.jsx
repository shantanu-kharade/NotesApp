import React, { useState } from 'react';
import Profile from './Profile.jsx';

// --- SVG Icon ---
const CogIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
);

const Header = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <header className="h-16 flex justify-between items-center px-8">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Notes</h1>

            <div
                className="relative"
                onMouseEnter={() => setIsProfileOpen(true)}
                onMouseLeave={() => setIsProfileOpen(false)}
            >
                <button 
                    className="p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                    <CogIcon />
                </button>
                {isProfileOpen && <Profile />}
            </div>
        </header>
    );  
};

export default Header;