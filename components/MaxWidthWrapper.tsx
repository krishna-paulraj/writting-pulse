import React from "react";

export default function MaxWidthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl min-h-screen h-full mx-auto px-5 py-10">
      {children}
    </div>
  );
}
