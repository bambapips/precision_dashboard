// src/pages/PlaceholderContent.tsx
import React from 'react';

// A generic placeholder for pages that haven't been built yet.

interface PlaceholderProps {
  title: string;
}

const PlaceholderContent: React.FC<PlaceholderProps> = ({ title }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="mt-2 text-gray-600">Content for the {title} page goes here.</p>
  </div>
);

export default PlaceholderContent;

