import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav className="space-y-2">
          <h2 className="text-lg font-semibold mb-4">Admin Panel</h2>
          <NavLink to="clubs" className="block py-2 px-3 rounded hover:bg-gray-700" activeClassName="bg-gray-700">
            Clubs
          </NavLink>
          <NavLink to="players" className="block py-2 px-3 rounded hover:bg-gray-700" activeClassName="bg-gray-700">
            Players
          </NavLink>
          <NavLink to="users" className="block py-2 px-3 rounded hover:bg-gray-700" activeClassName="bg-gray-700">
            Users
          </NavLink>
          <NavLink to="tournaments" className="block py-2 px-3 rounded hover:bg-gray-700" activeClassName="bg-gray-700">
            Tournaments
          </NavLink>
        </nav>
      </aside>
      <div className="flex-grow p-4 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}
