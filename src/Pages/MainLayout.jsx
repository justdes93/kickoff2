import React from 'react';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        {/* TODO: Replace with your main navigation */}
        <h1 className="text-xl font-semibold">Main Navigation</h1>
      </header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-200 text-center p-4">
        &copy; {new Date().getFullYear()} Your Company
      </footer>
    </div>
  );
}
