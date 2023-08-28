// pages/home.tsx
import React from 'react';
import Layout from '@/components/Layout';
import About from '@/components/Home';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default HomePage;