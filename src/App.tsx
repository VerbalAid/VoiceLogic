import React from 'react';
import { FileUp as FileUpload, History, Home, Settings as SettingsIcon, HelpCircle, Puzzle } from 'lucide-react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import TranscriptionView from './components/TranscriptionView';
import Settings from './components/Settings';
import Help from './components/Help';
import Integrations from './components/Integrations';
import { TranscriptionProvider } from './context/TranscriptionContext';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'settings':
        return <Settings />;
      case 'help':
        return <Help />;
      case 'integrations':
        return <Integrations />;
      default:
        return (
          <>
            <Dashboard />
            <TranscriptionView />
          </>
        );
    }
  };

  return (
    <TranscriptionProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation 
          items={[
            { icon: <Home size={20} />, label: 'Home', href: '#', onClick: () => setCurrentPage('home') },
            { icon: <FileUpload size={20} />, label: 'Upload', href: '#', onClick: () => setCurrentPage('upload') },
            { icon: <History size={20} />, label: 'History', href: '#', onClick: () => setCurrentPage('history') },
            { icon: <Puzzle size={20} />, label: 'Integrations', href: '#', onClick: () => setCurrentPage('integrations') },
            { icon: <SettingsIcon size={20} />, label: 'Settings', href: '#', onClick: () => setCurrentPage('settings') },
            { icon: <HelpCircle size={20} />, label: 'Help', href: '#', onClick: () => setCurrentPage('help') }
          ]} 
        />
        <main className="pt-16 px-4 md:px-6 lg:px-8">
          {renderPage()}
        </main>
      </div>
    </TranscriptionProvider>
  );
}

export default App;