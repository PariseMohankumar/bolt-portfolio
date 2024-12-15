import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section className={`py-16 ${className}`} id={id}>
      <Container>{children}</Container>
    </section>
  );
}