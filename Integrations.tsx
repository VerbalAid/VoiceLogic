import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Chrome, Puzzle, Code, ArrowRight } from 'lucide-react';

const Integrations = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold mb-6">Integrations</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="relative group"
          >
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl transition-all duration-300 group-hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="text-green-600" size={24} />
                  <h3 className="text-lg font-semibold">WhatsApp Integration</h3>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight className="text-green-600" />
                </motion.div>
              </div>
              <p className="text-gray-600 mb-4">Convert WhatsApp voice messages to text automatically</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Connect WhatsApp
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl transition-all duration-300 group-hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Instagram className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold">Instagram Integration</h3>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight className="text-purple-600" />
                </motion.div>
              </div>
              <p className="text-gray-600 mb-4">Transcribe Instagram voice messages and stories</p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Connect Instagram
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl transition-all duration-300 group-hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Chrome className="text-blue-600" size={24} />
                  <h3 className="text-lg font-semibold">Browser Extension</h3>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight className="text-blue-600" />
                </motion.div>
              </div>
              <p className="text-gray-600 mb-4">Transcribe audio from any website with our extension</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Install Extension
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl transition-all duration-300 group-hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Code className="text-orange-600" size={24} />
                  <h3 className="text-lg font-semibold">API Access</h3>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight className="text-orange-600" />
                </motion.div>
              </div>
              <p className="text-gray-600 mb-4">Build custom integrations with our API</p>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                View API Docs
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Puzzle className="text-blue-600" size={24} />
            <h3 className="text-lg font-semibold">Custom Integration</h3>
          </div>
          <p className="text-gray-600 mb-4">Need a specific integration? Let us know what you need!</p>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors">
            Request Custom Integration
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Integrations;