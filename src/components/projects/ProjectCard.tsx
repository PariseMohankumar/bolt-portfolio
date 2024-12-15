import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: readonly string[];
  image: string;
}

export function ProjectCard({ title, description, tech, image }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}