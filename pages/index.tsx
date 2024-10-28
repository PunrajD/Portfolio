// pages/index.tsx
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout title="Home - My Portfolio">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I’m a passionate developer skilled in TypeScript, React, and Next.js.</p>
      </section>
    </Layout>
  );
};

export default Home;
