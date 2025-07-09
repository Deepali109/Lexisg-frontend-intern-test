import React, { useState } from "react";
import AnswerCard from "./components/AnswerCard";

export default function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validQuestion = `In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?`;

  const handleSubmit = () => {
    if (query.trim() === "") {
      setError("Please enter a legal question before submitting.");
      return;
    }

    if (query.trim() !== validQuestion.trim()) {
      setError("Please enter a valid legal question.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      const simulatedResponse = {
        answer:
          "Yees, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects. (Para 7 of the document)",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link: "/dani-vs-pritam.pdf",
          },
        ],
      };
      setResponse(simulatedResponse);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <h1 className="text-2xl flex justify-center font-bold mb-6 text-gray-800">
        Lexi Legal Assistant
      </h1>

      <div className="max-w-4xl mx-auto">
        {/* Show conversation after answer is generated */}
        {response ? (
          <div className="space-y-6">
            {/* Question (right aligned) */}
            <div className="flex justify-end">
              <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg max-w-xl shadow">
                {query}
              </div>
            </div>

            {/* Answer */}
            <div className="flex justify-start">
              <div className="w-full">
                <AnswerCard response={response} />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="mt-4 px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-500"
                onClick={() => {
                  setQuery("");
                  setResponse(null);
                  setError("");
                }}
              >
                Ask Another Question
              </button>
            </div>
          </div>
        ) : (
          // Show input box before question is submitted
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Ask a legal question..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
