import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image
        style={{ borderRadius: '12%', border: '2px solid white' }}
        src="/logo.png"
        alt="SaaSavant Logo"
        width={40}
        height={40}
      />
      <span style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20 }}>SaaSavant</span>
    </>
  ),
  footer: {
    text: (
      <div style={{ width: '100%', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} <a href="https://saasavant-saas-boilerplate.hookerhillstudios.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>
            SaaSavant SaaS Boilerplate
          </a>. All rights reserved.
        </p>

      </div>
    ),
  },
};

export default config;
