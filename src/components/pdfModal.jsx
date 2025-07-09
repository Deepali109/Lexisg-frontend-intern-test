import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function PDFModal({ isOpen, onRequestClose, pdfUrl }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="PDF Viewer"
      className="bg-white p-4 rounded shadow-lg w-11/12 max-w-6xl mx-auto mt-3"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Judgment PDF - Dani Vs Pritam</h2>
        <button
          onClick={onRequestClose}
          className="text-red-500 font-bold text-xl"
        >
          ×
        </button>
      </div>

      {/* ✅ Instruction shown to the user */}
      <p className="text-yellow-800 text-sm text-center italic mb-3">
        Scroll to <strong>Page 2</strong> – <mark>Paragraph 7</mark> contains
        the required legal explanation.
      </p>

      <div className="overflow-hidden rounded border shadow max-h-[80vh]">
        <iframe
          src={`${pdfUrl}#page=2`}
          title="Dani Vs Pritam Judgment"
          width="100%"
          height="600px"
          className="w-full"
        />
      </div>
    </Modal>
  );
}
