import React from 'react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './projects/ProjectCard';
import { projects } from '../constants/projects';

export default function Projects() {
  return (
    <Section className="bg-gray-50" id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}