import React from "react";

export default function EducationHeader() {
  return (
    <header className="fixed top-0 inset-x-0 bg-white shadow z-10 px-4 py-3 flex items-center">
      <button className="text-gray-600 mr-3">
        <i className="fas fa-arrow-left"></i>
      </button>
      <h1 className="text-lg font-medium">트레이너 보수 교육</h1>
    </header>
  );
}
