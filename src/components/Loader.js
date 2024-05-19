import React, { useState, useEffect } from "react";

const Loader = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers = lines.map((_, index) =>
      setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, index * 300)
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, lines.length * 500 + 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lines = [
    { prefix: "1", text: "npm run start", className: "text-[#FFF]" },
    {
      prefix: "2",
      text: "starting the development server",
      className: "text-[#90EE90]",
    },
    {
      prefix: "3",
      text: "Compiled successfully!",
      className: "bg-info text-white",
    },
  ];

  return (
    <div
      className={`flex items-center justify-center min-h-screen bg-gray-100 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="mockup-code">
        {lines.map((line, index) => (
          <pre
            key={index}
            data-prefix={line.prefix}
            className={`line ${index < visibleLines ? "entered" : ""} ${
              line.className || ""
            }`}
          >
            <code>{line.text}</code>
          </pre>
        ))}
      </div>
    </div>
  );
};

export default Loader;
