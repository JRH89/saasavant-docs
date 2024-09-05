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
      <>
        <p>
          &copy; {new Date().getFullYear()} <a href="https://saasavant-saas-boilerplate.hookerhillstudios.com" target="_blank" rel="noopener noreferrer">
            SaaSavant SaaS Boilerplate</a>. All rights reserved.
        </p>
        <p>

        </p>
      </>
    ),
  },
};

export default config;
