import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  BarChart2, 
  Globe, 
  TrendingUp, 
  Users, 
  Activity,
  Languages,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1000 },
];

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}</h1>
          <p className="mt-1 text-sm text-gray-500">
            Here's what's happening with your localization projects
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Active Projects"
            value="12"
            change="+2.5%"
            isPositive={true}
            icon={<Globe className="h-6 w-6" />}
          />
          <StatCard
            title="Languages"
            value="24"
            change="+4"
            isPositive={true}
            icon={<Languages className="h-6 w-6" />}
          />
          <StatCard
            title="Monthly Visitors"
            value="48.5k"
            change="+12.3%"
            isPositive={true}
            icon={<Users className="h-6 w-6" />}
          />
          <StatCard
            title="Bounce Rate"
            value="32.1%"
            change="-2.1%"
            isPositive={true}
            icon={<Activity className="h-6 w-6" />}
          />
        </div>

        {/* Charts */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Traffic Overview</h2>
              <select className="text-sm border-gray-300 rounded-md">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
              <Link to="/reports" className="text-sm text-blue-600 hover:text-blue-500">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              <ActivityItem
                title="New translation completed"
                description="Spanish version of homepage is now live"
                time="2 hours ago"
                icon={<Globe className="h-5 w-5 text-green-500" />}
              />
              <ActivityItem
                title="SEO report generated"
                description="Monthly SEO performance analysis is ready"
                time="5 hours ago"
                icon={<BarChart2 className="h-5 w-5 text-blue-500" />}
              />
              <ActivityItem
                title="Keyword rankings updated"
                description="15 keywords improved in position"
                time="1 day ago"
                icon={<TrendingUp className="h-5 w-5 text-purple-500" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ 
  title, 
  value, 
  change, 
  isPositive, 
  icon 
}: { 
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="rounded-md bg-blue-50 p-3">
            {icon}
          </div>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="flex items-baseline">
              <div className="text-2xl font-semibold text-gray-900">{value}</div>
              <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {isPositive ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                {change}
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

const ActivityItem = ({ 
  title, 
  description, 
  time, 
  icon 
}: { 
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
}) => (
  <div className="flex space-x-3">
    <div className="flex-shrink-0">{icon}</div>
    <div className="flex-1 space-y-1">
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  </div>
);

export default Dashboard;
