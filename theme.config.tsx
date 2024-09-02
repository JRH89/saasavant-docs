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
          &copy; {new Date().getFullYear()} SaaSavant. All rights reserved. <a href="https://www.hookerhillstudios.com" target="_blank" rel="noopener noreferrer">
            Hooker Hill Studios
          </a>
        </p>
        <p>

        </p>
      </>
    ),
  },
};

export default config;
