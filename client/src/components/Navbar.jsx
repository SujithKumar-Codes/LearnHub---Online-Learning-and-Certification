import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDashboard = () => {
    if (!user) return navigate('/login');
    if (isAdmin()) return navigate('/admin');
    navigate('/dashboard');
  };

  return (
    <nav className="glass-strong fixed w-full z-20 bg-opacity-80 dark:bg-opacity-60 backdrop-blur-xl border-b border-white/20 dark:border-secondary-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          {/* ✅ Updated Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="LearnHub Logo"
              className="w-15 h-12 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl md:text-3xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
              LearnHub
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-secondary-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 px-3 py-2 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-secondary-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 px-3 py-2 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium"
            >
              Courses
            </Link>

            {user && (
              <button
                onClick={handleDashboard}
                className="text-secondary-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 px-3 py-2 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium"
              >
                Dashboard
              </button>
            )}

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-secondary-600 dark:text-white">
                  Welcome,{' '}
                  <span className="font-semibold text-gradient-primary">{user.name}</span>
                </span>
                <button onClick={handleLogout} className="btn-secondary text-sm px-6 py-2.5">
                  Logout
                </button>
                {/* Theme toggle */}
                <button
                  onClick={toggleTheme}
                  title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
                  className="ml-2 p-3 rounded-2xl bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group"
                >
                  {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 3.5a.75.75 0 01.75-.75h0A.75.75 0 0111.5 3.5V5a.75.75 0 01-1.5 0V3.5zM10 15a5 5 0 100-10 5 5 0 000 10zM3.5 9.25a.75.75 0 01-.75-.75v0A.75.75 0 013.5 7.75H5a.75.75 0 010 1.5H3.5zM15 11.5a.75.75 0 01.75.75v0a.75.75 0 01-.75.75H13.5a.75.75 0 010-1.5H15zM4.22 4.22a.75.75 0 011.06 0l.53.53a.75.75 0 11-1.06 1.06l-.53-.53a.75.75 0 010-1.06zM14.69 14.69a.75.75 0 011.06 0l.53.53a.75.75 0 11-1.06 1.06l-.53-.53a.75.75 0 010-1.06zM14.69 5.31a.75.75 0 010 1.06l-.53.53a.75.75 0 11-1.06-1.06l.53-.53a.75.75 0 011.06 0zM5.31 14.69a.75.75 0 010 1.06l-.53.53a.75.75 0 11-1.06-1.06l.53-.53a.75.75 0 011.06 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-600 dark:text-secondary-400 group-hover:text-primary-600 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
                    </svg>
                  )}
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-secondary-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 px-4 py-2 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium"
                >
                  Login
                </Link>
                <Link to="/signup" className="btn-primary px-6 py-2.5">
                  Sign Up
                </Link>

                {/* Theme toggle for unauthenticated users */}
                <button
                  onClick={toggleTheme}
                  title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
                  className="ml-2 p-3 rounded-2xl bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group"
                >
                  {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 3.5a.75.75 0 01.75-.75h0A.75.75 0 0111.5 3.5V5a.75.75 0 01-1.5 0V3.5zM10 15a5 5 0 100-10 5 5 0 000 10zM3.5 9.25a.75.75 0 01-.75-.75v0A.75.75 0 013.5 7.75H5a.75.75 0 010 1.5H3.5zM15 11.5a.75.75 0 01.75.75v0a.75.75 0 01-.75.75H13.5a.75.75 0 010-1.5H15zM4.22 4.22a.75.75 0 011.06 0l.53.53a.75.75 0 11-1.06 1.06l-.53-.53a.75.75 0 010-1.06zM14.69 14.69a.75.75 0 011.06 0l.53.53a.75.75 0 11-1.06 1.06l-.53-.53a.75.75 0 010-1.06zM14.69 5.31a.75.75 0 010 1.06l-.53.53a.75.75 0 11-1.06-1.06l.53-.53a.75.75 0 011.06 0zM5.31 14.69a.75.75 0 010 1.06l-.53.53a.75.75 0 11-1.06-1.06l.53-.53a.75.75 0 011.06 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-600 dark:text-secondary-400 group-hover:text-primary-600 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-2xl bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group"
            >
              <svg className="w-6 h-6 text-secondary-700 dark:text-secondary-300 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation remains unchanged */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-secondary-200 dark:border-secondary-700 bg-white/50 dark:bg-secondary-900/50 backdrop-blur-xl">
            {/* (keep your existing mobile nav code unchanged) */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
