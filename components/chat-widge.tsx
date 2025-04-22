"use client";
import { useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all"
        aria-label="Abrir chat"
      >
        💬
      </button>

      {/* Contenedor animado del chat */}
      <div
        className={`fixed bottom-24 right-5 w-[360px] h-[500px] bg-white shadow-xl rounded-xl overflow-hidden z-50 transition-all duration-500 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <iframe
          src="https://conia.app.n8n.cloud/webhook/3994a12a-6612-42ad-b595-99592f8a95b5/chat"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="clipboard-write"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>
    </>
  );
}
