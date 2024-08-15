// src/components/Header.tsx
import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
  };
}

const Header: React.FC<HeaderProps> = ({ name, title, contact }) => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-8 rounded-lg shadow-lg mb-8">
      <h1 className="text-4xl font-bold mb-2">{name}</h1>
      <h2 className="text-2xl mb-4">{title}</h2>
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <p className="flex items-center">
          <svg style={{ height:'1rem'}}className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          {contact.phone}
        </p>
        <p className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          {contact.email}
        </p>
      </div>
    </header>
  );
};

export default Header;