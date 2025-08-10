import { Link, useLocation } from "react-router-dom";
import { Calendar, User, Users, Inbox, Layers, Plus } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: <Calendar size={18} />, label: "Agenda view" },
    { path: "/created", icon: <User size={18} />, label: "Created by me" },
    { path: "/assigned", icon: <Users size={18} />, label: "Assigned to me" },
    { path: "/personal", icon: <Layers size={18} />, label: "Personal tasks" },
    { path: "/unified", icon: <Inbox size={18} />, label: "Unified view" },
  ];

  const groups = [
    { name: "Marketing", count: 3 },
    { name: "PR & Communications", count: 1 },
    { name: "Zylker Creators", count: 1 },
    { name: "Management team", count: 1 },
  ];

  return (
    <aside className="w-64 bg-[#121a2b] border-r border-gray-800 p-4 flex flex-col">
      {/* App Name */}
      <h1 className="text-2xl font-bold mb-6 text-white">ToDo</h1>

      {/* New Task Button */}
      <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md mb-4">
        <Plus size={18} /> New Task
      </button>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-2 rounded 
              ${
                location.pathname === item.path
                  ? "bg-[#1c253b] text-white"
                  : "text-gray-300 hover:bg-[#1c253b] hover:text-white"
              }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Groups */}
      <div className="mt-auto pt-6 border-t border-gray-700 text-sm text-gray-400">
        <p className="uppercase text-xs mb-2 tracking-wide">Groups</p>
        <div className="space-y-1">
          {groups.map((group) => (
            <div key={group.name} className="flex justify-between">
              <span>📁 {group.name}</span>
              <span className="text-gray-500">{group.count}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}


