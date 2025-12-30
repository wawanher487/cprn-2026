"use client";

import { useState, useEffect } from "react";

const testimonialsData = [
  {
    name: "Nakamura Daichi",
    title: "Director, Shibuya Institute",
    message:
      "Amazing experience! CPRN 2025 give me inspiration and new professional networking oppurtunities.",
  },
  {
    name: "Sarah Williams",
    title: "Reseacher, Cambridge University",
    message:
      "It was a well-organized event. I learned so much and met many brilliant people.",
  },
  {
    name: "Ahmad Fauzi",
    title: "Professor, UI Jakarta",
    message:
      "Top-notch event! Highly recommended for academics and researchers to connect.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-primary max-w-7xl mx-5 md:mx-20 border border-border rounded-xl text-white py-10 px-4 md:px-8 overflow-hidden scroll-mt-15"
    >
      {/* container untuk slide  */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonialsData.map((testi, i) => (
          <div key={i} className="min-w-full text-center flex flex-col gap-4">
            <span>
              <p className="heading-4 font-bold">{testi.name}</p>
              <p className="opacity-80">{testi.title}</p>
            </span>
            <p className="heading-3">{`"${testi.message}"`}</p>
          </div>
        ))}
      </div>

      {/* Bullet navigation — responsive & interactive */}
      <div className="flex justify-center gap-3 mt-6">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
