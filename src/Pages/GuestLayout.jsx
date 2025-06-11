import React from 'react';
import { Outlet } from 'react-router-dom';

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="mb-6">
        {/* TODO: Guest header/logo */}
        <h1 className="text-2xl font-bold">Welcome to Our App</h1>
      </header>
      <div className="w-full max-w-md p-4 bg-white shadow rounded-lg">
        <Outlet />
      </div>
      <footer className="mt-6 text-gray-500">
        &copy; {new Date().getFullYear()} Your Company
      </footer>
    </div>
  );
}