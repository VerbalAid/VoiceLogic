import React, { useState } from 'react';
import { FileText, Download, Calendar, FileIcon } from 'lucide-react';

interface Report {
  id: string;
  name: string;
  date: string;
  size: string;
  type: string;
}

const Reports = () => {
  const [reports] = useState<Report[]>([
    {
      id: '1',
      name: 'Q1 2024 Localization Report',
      date: '2024-03-15',
      size: '2.4 MB',
      type: 'PDF'
    },
    {
      id: '2',
      name: 'SEO Performance Analysis',
      date: '2024-03-10',
      size: '1.8 MB',
      type: 'PDF'
    },
    {
      id: '3',
      name: 'Keyword Rankings Export',
      date: '2024-03-05',
      size: '956 KB',
      type: 'CSV'
    },
    {
      id: '4',
      name: 'Technical SEO Audit',
      date: '2024-02-28',
      size: '3.2 MB',
      type: 'PDF'
    }
  ]);

  const handleDownload = (reportId: string) => {
    // Simulate download
    console.log(`Downloading report ${reportId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="mt-1 text-sm text-gray-500">
            Access and download your localization and SEO reports
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Available Reports</h2>
              <p className="mt-1 text-sm text-gray-500">
                Download and analyze your latest reports
              </p>
            </div>
            <FileText className="h-6 w-6 text-gray-400" />
          </div>
          
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {reports.map((report) => (
                <li key={report.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <FileIcon className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">{report.name}</h3>
                        <div className="flex items-center mt-1">
                          <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                          <p className="text-sm text-gray-500">
                            {new Date(report.date).toLocaleDateString()}
                          </p>
                          <span className="mx-2 text-gray-300">·</span>
                          <p className="text-sm text-gray-500">{report.size}</p>
                          <span className="mx-2 text-gray-300">·</span>
                          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
                            {report.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(report.id)}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;