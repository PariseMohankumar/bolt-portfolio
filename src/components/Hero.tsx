import React from 'react';
import { Code2, Database, FileCode2 } from 'lucide-react';
import { Container } from './ui/Container';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Full Stack Developer
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Passionate about creating robust web applications with modern technologies.
            Specializing in Java Spring Boot backend and React frontend development.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="flex justify-center space-x-6">
              <Code2 className="w-8 h-8 text-blue-500" />
              <Database className="w-8 h-8 text-green-500" />
              <FileCode2 className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}