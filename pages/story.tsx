// pages/story.tsx
import React from 'react';
import Layout from '@/components/Layout';
import StoryPage from '@/components/story/StoryPage';

const Story: React.FC = () => {
  return (
    <Layout>
      <StoryPage />
    </Layout>
  );
};

export default Story;