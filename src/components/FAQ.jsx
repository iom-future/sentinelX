import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  Tag, 
  ArrowRight,
  MessageSquareCode
} from './icons';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'General', 'Architecture', 'Monitoring', 'Integrations', 'AI Engine', 'Developers'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Frequently Asked Questions.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            Everything you need to know about SentinelX's technical architecture, integration models, and security principles.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-1.5 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#161F2D] text-[#43D9C3] font-semibold border border-[#3978E8]'
                    : 'bg-[#101622] text-[#929EAE] hover:text-[#F4F7FC] border border-[#243044]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#929EAE] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 bg-[#101622] border border-[#243044] rounded-lg text-xs font-mono text-white placeholder-[#929EAE] focus:outline-none focus:border-[#3978E8]"
            />
          </div>
        </div>

        {/* Accordion List - Numbers Removed, Icons Added */}
        <div className="mt-8 space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-[#101622] rounded-xl border border-[#243044] text-xs font-mono text-[#929EAE]">
              No questions found matching your query.
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-[#101622] border rounded-xl overflow-hidden transition-all duration-200 ${
                    isOpen ? 'border-[#3978E8]/70 shadow-lg shadow-black/40' : 'border-[#243044] hover:border-[#243044]/80'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="p-1 rounded bg-[#161F2D] border border-[#243044] text-[#3978E8] shrink-0 mt-0.5 sm:mt-0">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <span className="text-base font-heading font-semibold text-[#F4F7FC]">
                        {faq.q}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161F2D] text-[#929EAE] border border-[#243044] hidden md:inline">
                        {faq.category}
                      </span>
                      <div className={`p-1 rounded bg-[#161F2D] border border-[#243044] text-[#929EAE] transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#929EAE] leading-relaxed border-t border-[#243044]/50 space-y-4">
                      <p className="pt-2">{faq.a}</p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {faq.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#080B12] text-[#43D9C3] border border-[#243044]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
