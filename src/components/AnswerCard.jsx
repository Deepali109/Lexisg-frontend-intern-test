import React, { useState } from "react";
import PDFModal from "./pdfModal";
import TypewriterText from "./TypewriterText";

export default function AnswerCard({ response }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const citation = response.citations[0];
  const pdfUrl = citation.link;

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Answer:</h2>

      <div className="mb-4 text-gray-700 leading-relaxed">
        {/* ✅ Animated answer with typewriter effect */}
        <TypewriterText text={response.answer} speed={15} />
      </div>

      <h3 className="font-semibold text-gray-800 mb-2">Citation</h3>
      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 text-sm italic mb-4">
        {citation.text}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
      >
        View Judgment PDF
      </button>

      <PDFModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        pdfUrl={pdfUrl}
      />
    </div>
  );
}
