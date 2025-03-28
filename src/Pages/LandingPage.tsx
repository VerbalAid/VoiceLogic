import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  FileText, 
  Search, 
  Globe2,
  Languages,
  LineChart,
  Settings,
  CheckCircle
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simplify Localization, Amplify Your Global Reach
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your business with AI-powered localization analytics and SEO optimization
            </p>
            <Link
              to="/signup"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Sign Up to Get Started
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features for Global Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BarChart2 className="h-8 w-8 text-blue-600" />}
              title="Real-time Localization Analytics"
              description="Monitor your global performance with instant insights and metrics"
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8 text-blue-600" />}
              title="Custom Reporting"
              description="Generate detailed reports tailored to your specific needs"
            />
            <FeatureCard
              icon={<Search className="h-8 w-8 text-blue-600" />}
              title="Keyword Performance Tracking"
              description="Track and optimize your multilingual keyword rankings"
            />
            <FeatureCard
              icon={<Globe2 className="h-8 w-8 text-blue-600" />}
              title="Website Scanner"
              description="Identify localization opportunities and technical improvements"
            />
          </div>
        </div>
      </section>

      {/* About Agency Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Expert SEO Localization for Seamless Global Reach
            </h2>
            <p className="text-xl text-gray-600">
              Helping businesses break barriers with expert language localization and technical SEO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <ServiceCard
              icon={<Languages className="h-8 w-8 text-blue-600" />}
              title="Website Localization"
              description="Professional translation and cultural adaptation services"
            />
            <ServiceCard
              icon={<LineChart className="h-8 w-8 text-blue-600" />}
              title="SEO Optimization"
              description="Boost your global search engine rankings"
            />
            <ServiceCard
              icon={<Search className="h-8 w-8 text-blue-600" />}
              title="Keyword Localization"
              description="Target the right keywords for each market"
            />
            <ServiceCard
              icon={<Settings className="h-8 w-8 text-blue-600" />}
              title="Technical SEO Audits"
              description="Comprehensive analysis and optimization"
            />
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Global?</h2>
          <p className="text-xl mb-8">Start your journey to international success today</p>
          <Link
            to="/signup"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;