import React from 'react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { SkillCard } from './skills/SkillCard';
import { skills } from '../constants/skills';

export default function Skills() {
  return (
    <Section className="bg-white" id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <SkillCard key={category} category={category} items={items} />
        ))}
      </div>
    </Section>
  );
}