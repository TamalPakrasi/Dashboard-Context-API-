import React, { lazy, Suspense } from "react";
import { Loading } from "../components";

const BentoGrid = lazy(() => import("../components/BentoGrid.jsx"));

function Dashboard() {
  return (
    <div className="min-h-full">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto w-full px-4 py-6 sm:px-6 lg:px-8">
          <Suspense fallback={<Loading />}>
            <BentoGrid />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
