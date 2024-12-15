import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';

export default function Contact() {
  return (
    <Section className="bg-white" id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-gray-600 text-center text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </p>
          <div className="flex space-x-6">
            <a
              href="mailto:john.doe@example.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}