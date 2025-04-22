"use client"
// components/FloatingChatTooltip.tsx
export default function FloatingChatTooltip() {



  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-2">
      { (
        <div className="bg-white text-gray-800 text-sm px-4 py-2 rounded-xl shadow-lg animate-bounce">
          ¿Tienes dudas? ¡Habla con nuestros asistentes!
        </div>
      )}
      <button
        onClick={() => {
          // aquí puedes abrir tu chat (por ejemplo, abrir un modal o redirigir)
          const chatButton = document.querySelector('[aria-label="Chat"]') as HTMLElement;
          chatButton?.click(); // simula click si es un botón ya montado
        }}
        className="bg-pink-500 hover:bg-pink-600 transition rounded-full w-14 h-14 flex items-center justify-center shadow-xl"
        aria-label="Chat"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M2 21l1.5-4.5C2.6 15.4 2 14.3 2 13V6a4 4 0 014-4h12a4 4 0 014 4v7a4 4 0 01-4 4H8l-6 4z" />
        </svg>
      </button>
    </div>
  );
}
