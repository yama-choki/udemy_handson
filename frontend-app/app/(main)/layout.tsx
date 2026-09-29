"use client";

import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="bg-slate-50 flex-1 overflow-auto">{children}</main>
    </div>
  );
}

export default MainLayout;