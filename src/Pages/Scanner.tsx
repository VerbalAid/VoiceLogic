import React, { useState } from 'react';
import { Globe2, Search, Languages } from 'lucide-react';

const Scanner = () => {
  const [url, setUrl] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<null | any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    
    // Simulate scanning process
    setTimeout(() => {
      setResults({
        seoScore: 85,
        localizationOpportunities: [
          'Missing meta descriptions in target language',
          'Untranslated image alt texts',
          'Navigation menu needs localization'
        ],
        keywordGaps: [
          'producto orgánico',
          'comprar en línea',
          'envío gratis'
        ]
      });
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Website Scanner</h1>
          <p className="mt-1 text-sm text-gray-500">
            Analyze your website for localization opportunities and SEO improvements
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                Website URL
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Globe2 className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  id="url"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="sourceLang" className="block text-sm font-medium text-gray-700">
                  Source Language
                </label>
                <select
                  id="sourceLang"
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>

              <div>
                <label htmlFor="targetLang" className="block text-sm font-medium text-gray-700">
                  Target Language
                </label>
                <select
                  id="targetLang"
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isScanning}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isScanning ? (
                  <>
                    <Search className="animate-spin -ml-1 mr-2 h-5 w-5" />
                    Scanning...
                  </>
                ) : (
                  'Start Scan'
                )}
              </button>
            </div>
          </form>

          {results && (
            <div className="mt-8 space-y-6">
              <div className="border-t pt-6">
                <h2 className="text-lg font-medium text-gray-900">Scan Results</h2>
                
                <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-blue-800">SEO Score</h3>
                    <p className="mt-2 text-3xl font-bold text-blue-900">{results.seoScore}%</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Localization Opportunities</h3>
                  <ul className="mt-2 space-y-2">
                    {results.localizationOpportunities.map((opportunity: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <Languages className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-sm text-gray-600">{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Keyword Gaps</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {results.keywordGaps.map((keyword: string, index: number) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scanner;