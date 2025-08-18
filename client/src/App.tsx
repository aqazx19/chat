import React from 'react';
import FloatButton from './FloatButton';
import DarkModeToggle from './components/DarkModeToggle';

export default function App(): JSX.Element {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white p-6 transition-colors">
            <div className="flex justify-between items-center mb-6">
                <div className="md:bg-pink-500 dark:md:bg-pink-600">Hello</div>
                <DarkModeToggle />
            </div>
            <FloatButton />
        </main>
    );
}
