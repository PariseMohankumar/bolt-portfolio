import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { Container } from './ui/Container';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <Container className="py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
          <div className="flex space-x-4">
            <a href="https://github.com" className="text-gray-500 hover:text-gray-700">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-700">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:john.doe@example.com" className="text-gray-500 hover:text-gray-700">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}