import { useState, useEffect } from "react";
import axios from "axios";

const QuoteBox: React.FC = () => {

  useEffect(() => {
    const controller = new AbortController(); 

    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
          headers: {
            "X-Api-Key": "LcTBZskbjemYyQOEP+0qyg==Yh5T1pUbpBxHsO2H",
          },
          signal: controller.signal,
        });

      } catch (err) {
        if (axios.isCancel(err)) return;
      }
    };
    fetchQuote();

    return () => {
      controller.abort();
    };
  }, []); 

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl mb-10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {quote?.category && (
        <span className="absolute top-2 right-2 bg-white/20 text-xs font-semibold uppercase px-2 py-1 rounded-full opacity-80">
        </span>
      )}
      {error ? (
        <p className="text-red-200 text-center text-lg font-medium">{error}</p>
      ) : quote ? (
        <div className="text-center space-y-4">
          <p className="text-xl italic font-semibold leading-relaxed tracking-wide">
            "{quote.quote}"
          </p>
          <p className="text-base font-medium opacity-90">- {quote.author}</p>
        </div>
      ) : (
        <p className="text-center text-gray-200 text-lg animate-pulse">Fetching a wise quote...</p>
      )}
      <div className="mt-6 h-1 w-16 bg-white/30 rounded-full mx-auto"></div>
    </div>
  );
};

export default QuoteBox;