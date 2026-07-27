"use client";

import { useEffect, useState } from "react";

export default function ErrorOverlay() {
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const addError = (message: string) => {
      setErrors((prev) => [...prev.slice(-4), message]);
    };

    const onError = (event: ErrorEvent) => {
      addError(
        `JS Error:
${event.message}

${event.filename}:${event.lineno}:${event.colno}`
      );
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason =
        typeof event.reason === "string"
          ? event.reason
          : event.reason?.stack ||
            event.reason?.message ||
            JSON.stringify(event.reason);

      addError(`Promise Rejection:\n${reason}`);
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener(
        "unhandledrejection",
        onUnhandledRejection
      );
    };
  }, []);

  if (!errors.length) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: "auto 8px 8px 8px",
        zIndex: 999999,
        background: "#b00020",
        color: "#fff",
        padding: "12px",
        borderRadius: 8,
        fontSize: 12,
        whiteSpace: "pre-wrap",
        fontFamily: "monospace",
        maxHeight: "40vh",
        overflow: "auto",
      }}
    >
      {errors.map((error, index) => (
        <div key={index}>
          {error}
          {index !== errors.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}