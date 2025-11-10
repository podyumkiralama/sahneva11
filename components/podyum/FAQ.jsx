"use client";

import { useState } from "react";

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section aria-labelledby="sss-heading" className="bg-white py-20">
      <article className="mx-auto max-w-5xl px-4">
        <header className="mb-10 text-center">
          <h2 id="sss-heading" className="text-3xl font-black text-slate-900 sm:text-4xl">
            Podyum Kiralama Sıkça Sorulan Sorular
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Teslimat süresi, kurulum detayları ve fiyatlandırma hakkında en çok merak edilen konuları burada bulabilirsiniz.
          </p>
        </header>

        <ul className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const regionId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <li key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50">
                <h3 className="text-lg font-semibold">
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-base font-semibold text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                    aria-expanded={isOpen}
                    aria-controls={regionId}
                    onClick={() => toggleItem(index)}
                  >
                    {item.question}
                    <span aria-hidden="true" className="text-xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={regionId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 text-base text-slate-700"
                >
                  <p>{item.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
