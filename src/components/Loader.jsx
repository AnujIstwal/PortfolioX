import React from "react";

export default function Loader() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-transparent"></div>
    </div>
  );
}
