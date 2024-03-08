import React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-16">
      <div className="flex justify-between">
        <h1 className="text-xl font-medium">writing.dev</h1>
        <div className="flex gap-3">
          <h1>categories</h1>
          <h1>articles</h1>
          <h1>about</h1>
        </div>
      </div>
    </div>
  );
}
