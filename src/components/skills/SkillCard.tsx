import React from 'react';

interface SkillCardProps {
  category: string;
  items: readonly string[];
}

export function SkillCard({ category, items }: SkillCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 capitalize mb-4">{category}</h3>
      <ul className="space-y-2">
        {items.map((skill) => (
          <li key={skill} className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            <span className="text-gray-700">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}