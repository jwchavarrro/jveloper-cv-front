/**
 * @file layout-page.tsx
 * @description Layout page component
 */

import React from "react";

interface LayoutPageProps {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
}

export const LayoutPage = ({ header, main, footer }: LayoutPageProps) => {
  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b p-2 px-5">{header}</header>
      {/* Main Content */}
      <main className="flex-1">{main}</main>
      {/* Footer */}
      <footer className="h-10 border-t">{footer}</footer>
    </div>
  );
};
