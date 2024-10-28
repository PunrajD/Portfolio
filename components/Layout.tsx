// components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = "My Portfolio" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content="My Portfolio Website" />
    </Head>
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>© 2024 My Portfolio. All Rights Reserved.</p>
    </footer>
  </div>
);

export default Layout;
