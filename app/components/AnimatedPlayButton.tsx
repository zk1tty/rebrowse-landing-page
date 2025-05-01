'use client'
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

export default function AnimatedPlayButton() {
  const [rotation, setRotation] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, handleSubmit] = useForm("xjkwgdjd");
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([]);
  const [otherUseCase, setOtherUseCase] = useState("");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [30, -30]);
  const rotateY = useTransform(mouseX, [-100, 100], [-30, 30]);

  const useCases = [
    { value: "spreadsheet", label: "Spreadsheet (Excel, Google Sheets)" },
    { value: "document", label: "Document (Google Docs, Word)" },
    { value: "ecommerce", label: "eCommerce (Amazon, Shopify)" },
    { value: "event-management", label: "Event (Luma, Eventbrite)" },
    { value: "marketing", label: "Marketing (Hubspot, Salesforce)" },
    { value: "other", label: "Other" }
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      setRotation(prev => prev + e.deltaY * 0.5);
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const handleCheckboxChange = (value: string) => {
    setSelectedUseCases(prev => 
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
    // Clear other use case when unchecking "other"
    if (value === "other" && selectedUseCases.includes("other")) {
      setOtherUseCase("");
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Format use cases with "other" text if present
    const formattedUseCases = selectedUseCases
      .filter(useCase => useCase !== "other" || (useCase === "other" && otherUseCase.trim()))
      .map(useCase => useCase === "other" ? `Other: ${otherUseCase}` : useCase);
    
    formData.set('useCases', formattedUseCases.join(', '));
    await handleSubmit(e);
    if (state.succeeded) {
      setTimeout(() => {
        setIsModalOpen(false);
        setSelectedUseCases([]);
        setOtherUseCase("");
      }, 3000);
    }
  };

  const isOtherSelected = selectedUseCases.includes("other");

  return (
    <>
      <motion.div
        className="relative w-32 h-32 cursor-pointer"
        style={{
          perspective: 1000,
        }}
        onClick={() => setIsModalOpen(true)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          mouseX.set(e.clientX - centerX);
          mouseY.set(e.clientY - centerY);
        }}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
      >
        <motion.div
          className="relative w-full h-full rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg"
          style={{
            rotateX,
            rotateY,
            rotate: rotation,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400/30 to-purple-500/30 blur-xl" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <svg
              className="w-10 h-10 mb-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium">Try out</span>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#171717] p-8 rounded-2xl max-w-md w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              {!state.succeeded ? (
                <>
                  <h3 className="text-xl font-semibold text-white mb-4">Curious to try?</h3>
                  <p className="text-zinc-400 mb-6">We're working hard to launch it now.</p>
                  <p className="text-zinc-400 mb-6">Please leave your email and we'll notify you when we launch.</p>
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-400">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-pink-500 focus:outline-none"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-zinc-400">
                        How do you plan to use Rebrowse? (Select all that apply)
                      </label>
                      <div className="space-y-2 mt-2">
                        {useCases.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800/50 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              name="useCases"
                              value={option.value}
                              checked={selectedUseCases.includes(option.value)}
                              onChange={() => handleCheckboxChange(option.value)}
                              className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-pink-500 focus:ring-pink-500 focus:ring-offset-zinc-900 checked:bg-pink-500 checked:border-pink-500"
                            />
                            <span className="text-zinc-300">{option.label}</span>
                          </label>
                        ))}
                      </div>
                      {isOtherSelected && (
                        <div className="mt-2 ml-7">
                          <input
                            type="text"
                            value={otherUseCase}
                            onChange={(e) => setOtherUseCase(e.target.value)}
                            placeholder="Please specify..."
                            className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-pink-500 focus:outline-none"
                          />
                        </div>
                      )}
                      <ValidationError 
                        prefix="Use Cases" 
                        field="useCases"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting || selectedUseCases.length === 0 || (isOtherSelected && !otherUseCase.trim())}
                      className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {state.submitting ? 'Submitting...' : 'Notify Me'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">🤗Thanks🤗</h3>
                  <p className="text-zinc-400">We'll be in touch soon.</p>
                  <p className="text-zinc-400">Follow <a href="https://x.com/n0rizkitty" className="text-pink-500 hover:underline">me on X</a> to get updates :D</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 