"use client";

import { LayoutPage } from "@/components/template";

/**
 * @file page.tsx
 * @description Página principal del sitio
 */


// Importacion de componentes


const Home = () => {
  return (
    <LayoutPage header={<p>Header</p>} main={<p>Main</p>} footer={<p>Footer</p>} />
  );
};

export default Home;
