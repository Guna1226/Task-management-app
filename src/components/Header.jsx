// File: src/components/Header.jsx
import { Search, Plus } from "lucide-react";

export default function Header({ onAddClick, searchValue, setSearchValue }) {
  // onAddClick is optional handler (could open modal or navigate)
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">ToDo <span className="text-sm text-gray-500 ml-2 hidden sm:inline">— Agenda</span></h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-9 pr-4 py-2 rounded-full w-64 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none"
            placeholder="Search"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
        </div>

        <button
          onClick={onAddClick}
          className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-3 py-2 flex items-center gap-2 shadow"
          title="New Task"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">New</span>
        </button>

        <img src="https://i.pravatar.cc/36" alt="avatar" className="w-9 h-9 rounded-full border border-gray-200" />
      </div>
    </header>
  );
}
