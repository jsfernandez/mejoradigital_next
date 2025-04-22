"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import "@/assets/css/chat.css";
import { createChat } from "@n8n/chat";

type LanguageConfig = {
  title: string;
  subtitle: string;
  footer: string; // ya no opcional
  getStarted: string;
  inputPlaceholder: string;
  closeButtonTooltip: string;
  [message: string]: string; // para permitir claves adicionales como "error_message" si existieran
};

type I18nConfig = {
  en: LanguageConfig;
  // puedes agregar "es", "de", etc. si lo necesitas
};

export const N8NChat = () => {
  const i18n: I18nConfig = {
    en: {
      title: "Mejora Digital",
      subtitle: "Ayudando 24/7, ¿cúal es tu consulta?",
      footer: "", // aunque no lo uses, debe estar
      getStarted: "Nueva conversación",
      inputPlaceholder: "Escribe tu consulta...",
      closeButtonTooltip: "Cerrar chat", // 🔥 ESTA ES LA QUE FALTABA
    },
  };

  useEffect(() => {
    createChat({
      webhookUrl:
        "https://conia.app.n8n.cloud/webhook/3994a12a-6612-42ad-b595-99592f8a95b5/chat",
      webhookConfig: {
        method: "POST",
        headers: {},
      },
      target: "#n8n-chat",
      mode: "window",
      chatInputKey: "chatInput",
      chatSessionKey: "sessionId",
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: "en",
      initialMessages: [
        "Hola, Soy Sofía parte del equipo de Mejora Digital, como te puedo ayudar hoy?",
      ],
      i18n,
    });
  }, []);

  return <div></div>;
};
