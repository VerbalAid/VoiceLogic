import React, { useState } from 'react';
import { User, Key, CreditCard, Bell, Shield, Mail } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [email, setEmail] = useState('user@example.com');
  const [notifications, setNotifications] = useState({
    email: true,
    browser: false,
    reports: true,
    updates: true
  });

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
              {[
                { id: 'account', name: 'Account', icon: User },
                { id: 'security', name: 'Security', icon: Shield },
                { id: 'notifications', name: 'Notifications', icon: Bell },
                { id: 'api', name: 'API Keys', icon: Key },
                { id: 'billing', name: 'Billing', icon: CreditCard },
              ].map(({ id, name, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`
                    border-b-2 py-4 px-1 text-sm font-medium flex items-center
                    ${activeTab === id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'account' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Account Information</h3>
                  <p className="mt-1 text-sm text-gray-500">Update your account details</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Notification Preferences</h3>
                  <p className="mt-1 text-sm text-gray-500">Choose how you want to be notified</p>
                </div>

                <div className="space-y-4">
                  {Object.entries(notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 capitalize">
                          {key} Notifications
                        </h4>
                        <p className="text-sm text-gray-500">
                          Receive notifications via {key}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleNotificationChange(key as keyof typeof notifications)}
                        className={`
                          relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer 
                          transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                          ${value ? 'bg-blue-600' : 'bg-gray-200'}
                        `}
                      >
                        <span
                          className={`
                            pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 
                            transition ease-in-out duration-200
                            ${value ? 'translate-x-5' : 'translate-x-0'}
                          `}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'api' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">API Keys</h3>
                  <p className="mt-1 text-sm text-gray-500">Manage your API keys</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Production API Key</h4>
                      <p className="text-sm text-gray-500">••••••••••••••••</p>
                    </div>
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                    >
                      Regenerate
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Subscription Plan</h3>
                  <p className="mt-1 text-sm text-gray-500">Manage your subscription and billing</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-blue-900">Current Plan: Pro</h4>
                      <p className="text-sm text-blue-700">$49/month</p>
                    </div>
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                    >
                      Upgrade Plan
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Security Settings</h3>
                  <p className="mt-1 text-sm text-gray-500">Manage your security preferences</p>
                </div>

                <div className="space-y-4">
                  <button
                    type="button"
                    className="w-full flex justify-between items-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-gray-400 mr-3" />
                      <div className="text-left">
                        <h4 className="text-sm font-medium text-gray-900">Change Password</h4>
                        <p className="text-sm text-gray-500">Update your password</p>
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    className="w-full flex justify-between items-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <Key className="h-5 w-5 text-gray-400 mr-3" />
                      <div className="text-left">
                        <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                        <p className="text-sm text-gray-500">Add an extra layer of security</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;