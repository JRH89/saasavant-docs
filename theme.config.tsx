import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <><Image style={{ borderRadius: '12%', border: '2px solid white' }} src="/logo.png" alt="SaaSavant Logo" width={40} height={40} />  <span style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20 }}>SaaSavant</span></>,

  docsRepositoryBase: "https://saasavant-docs.vercel.app",
  footer: {
    text: "SaaSavant",
  },
};

export default config;
