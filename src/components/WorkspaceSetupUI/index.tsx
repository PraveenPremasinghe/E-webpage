import { useState } from 'react';

const WorkspaceSetupUI = () => {
  const modules = [
    { id: 1, name: 'Smart Scheduling', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2' +
        ' 2v12a2 2 0 002 2z' },
    { id: 2, name: 'Client Management', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10' +
        ' 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { id: 3, name: 'Workflow Automation', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: 4, name: 'Digital Approval', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0' +
        ' 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },

    { id: 5, name: 'Analysis & Reporting', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0' +
        ' 00-2 2v12a2 2 0 002 2z' },
    { id: 6, name: 'AI', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0' +
        ' 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
    { id: 7, name: 'Multi-Device Access', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0' +
        ' 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { id: 8, name: 'Chat', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0' +
        ' 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    { id: 9, name: 'Branding', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0' +
        ' 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },


  ];

  return (
    <div className="relative">


      {/* Glass-morphism card */}
      <div className="backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 w-full max-w-lg p-6 transform transition-all hover:scale-[1.01]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold"> Platforms</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 font-light">Start with what you need, customize as you go.</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {modules.map((module) => (
            <div
              key={module.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl px-3 py-4 flex flex-col items-center justify-center cursor-pointer transition-all hover:shadow-md hover:-translate-y-1 border hover:border-pink-600 hover:bg-pink-50/20 border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 mb-3 flex items-center justify-center text-gray-500 dark:text-gray-300 group-hover:text-pink-800 dark:group-hover:text-pink-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={module.icon}
                  />
                </svg>
              </div>
              <span className="text-sm text-center text-gray-700 dark:text-gray-200 group-hover:text-pink-800 dark:group-hover:text-pink-400 font-semibold">{module.name}</span>

              {/* Hover indicator dot */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>





      </div>
    </div>
  );
};

export default WorkspaceSetupUI;
