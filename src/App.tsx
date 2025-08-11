// src/App.tsx
import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import PromptsPage from './pages/Prompts';
import PlaceholderContent from './pages/PlaceholderContent';
import { menuItems, administrationItems } from './data/navigation';


const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePath, setActivePath] = useState('/settings/prompts');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getBreadcrumbs = (): string[] => {
      const pathParts = activePath.split('/').filter(p => p);
      if (pathParts.length === 0) return ['Dashboard'];

      const allItems = [...menuItems, ...administrationItems];
      const mainItem = allItems.find(i => activePath.startsWith(i.path));

      if (mainItem) {
          const childItem = mainItem.children?.find(c => c.path === activePath);
          if (childItem) return [mainItem.label, childItem.label];
          return [mainItem.label];
      }
      return ['Dashboard'];
  };
  
  const renderContent = () => {
    // This is a simple router. In a real app, you'd use a library like React Router.
    if (activePath.startsWith('/settings/prompts')) {
      return <PromptsPage />;
    }
    const title = getBreadcrumbs().join(' > ');
    return <PlaceholderContent title={title || 'Overview'} />;
  };

  return (
    <div className="h-screen w-full relative lg:flex bg-gray-100">
      <Sidebar isOpen={sidebarOpen} activePath={activePath} setPath={setActivePath} />
      <div className="flex-1 w-full flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} 
        //breadcrumbs={getBreadcrumbs()}
         />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
