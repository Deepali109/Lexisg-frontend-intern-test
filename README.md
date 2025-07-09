# ⚖️ Lexi Legal Assistant

Lexi Legal Assistant is a React + Vite-based chat interface that answers legal questions and shows relevant citations from judgment PDFs. It mimics a ChatGPT-style experience with typewriter effects and dynamic UI, built for clarity and simplicity.

---
## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/yourusername/lexi-assistant.git,
cd lexi-assistant
Delete the screenshots folder
### 2. Install Dependency
npm install

### 3. Start the App
npm run dev

###  Screenshots
 Question Input View
 ![Question UI](./Screenshots/Screenshot(3652).png)

Answer & Citation Display
![Answer UI](./Screenshots/Screenshot(3653).png)

Judgment PDF Modal
![Model UI](./Screenshots/Screenshot(3654).png)

###  🔗 Citation Linking & PDF Integration
When the user submits a valid legal query:

The answer is animated using a custom TypewriterText component.

Once the answer finishes typing, the citation appears below.

Clicking "View Judgment PDF" opens a modal with an embedded <iframe> that displays a locally served PDF (public/dani-vs-pritam.pdf).

A scroll instruction tells the user:

“Scroll to Page 2 – Paragraph 7 discusses future prospects.”

This design ensures clarity and legal context without needing full text parsing or PDF.js complexity.

###  Folder Structure

📦 lexi-assistant
├── public/
│ └── dani-vs-pritam.pdf
├── src/
│ ├── components/
│ │ ├── AnswerCard.jsx
│ │ ├── TypewriterText.jsx
│ │ └── pdfModal.jsx
│ ├── App.jsx
│ └── main.jsx
├── screenshots/
│ ├── input.png
│ ├── response.png
│ └── modal.png
└── README.md


