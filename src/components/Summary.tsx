// src/components/Summary.tsx
import React from 'react';

interface SummaryProps {
  summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Summary</h2>
      <p className="text-gray-600 leading-relaxed">{summary}</p>
    </section>
  );
};

export default Summary;