import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-900">
      {/* logo / name */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
        Mugabo
      </h3>

      {/* navigation */}
      <nav className="flex items-center gap-6 text-slate-600 dark:text-slate-300">
        <Link
          to="#"
          className="hover:text-brand dark:hover:text-brand-dark transition-colors"
        >
          About
        </Link>
        <Link
          to="#"
          className="hover:text-brand dark:hover:text-brand-dark transition-colors"
        >
          Skills
        </Link>
        <Link
          to="#"
          className="hover:text-brand dark:hover:text-brand-dark transition-colors"
        >
          Projects
        </Link>
        <Link
          to="#"
          className="hover:text-brand dark:hover:text-brand-dark transition-colors"
        >
          Contact
        </Link>

        {/* theme‑toggle placeholder */}
        <button
          type="button"
          className="ml-2 rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle theme"
        >
          🌙
        </button>
      </nav>
    </header>
  );
};
