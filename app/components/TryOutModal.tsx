'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { Rocket, Bell } from "lucide-react";

interface TryOutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const useCasesArray = [
  { value: "ai-content", label: "AI Content Creation (ChatGPT, evelenlab, Heygen, etc)" },
  { value: "web-qa", label: "Web QA Testing(Cypress, Playwright, etc)" },
  { value: "tech-ops", label: "Tech Ops (DevOps, SRE, etc)" },
  { value: "spreadsheet", label: "Spreadsheet (Excel, Google Sheets)" },
  { value: "document", label: "Document (Google Docs, Word)" },
  { value: "ecommerce", label: "eCommerce (Shopify, TikTok Shop, etc)" },
  { value: "other", label: "Other" }
];

const TryOutModal: React.FC<TryOutModalProps> = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm("xjkwgdjd");
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([]);
  const [otherUseCase, setOtherUseCase] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        onClose();
        setSelectedUseCases([]);
        setOtherUseCase("");
        // Resetting form state if useForm provides a method, or might need to re-initialize the form
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  const handleCheckboxChange = (value: string) => {
    setSelectedUseCases(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
    if (value === "other" && selectedUseCases.includes("other")) {
      setOtherUseCase("");
    }
  };

  const onSubmitModal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formattedUseCases = selectedUseCases
      .filter(useCase => useCase !== "other" || (useCase === "other" && otherUseCase.trim()))
      .map(useCase => useCase === "other" ? `Other: ${otherUseCase}` : useCase);
    
    formData.set('useCases', formattedUseCases.join(', '));
    // Email is already part of formData through the input field
    await handleSubmit(formData); // Pass formData directly
  };
  

  const isOtherSelected = selectedUseCases.includes("other");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
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
                <h3 className="text-xl font-semibold text-white mb-4"> Welcome to Rebrowse 🤗</h3>
                <p className="text-zinc-400 mb-6">Public launch is coming soon at Product Hunt. 😸</p>
                <p className="text-zinc-400 mb-6">Please join our founding user community, and get the early user perks.</p>
                <form onSubmit={onSubmitModal} className="space-y-4">
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
                      {useCasesArray.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800/50 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="useCases" // Name attribute is important for FormData
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
                          name="otherUseCaseDetail" // Name attribute for FormData
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
                    {state.submitting ? 'Submitting...' : (
                      <>
                        Notify me <Bell className="inline-block w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">🤗Thanks🤗</h3>
                <p className="text-zinc-400">We'll be in touch soon.</p>
                <p className="text-zinc-400 mb-6">Follow <a href="https://x.com/n0rizkitty" className="text-pink-500 hover:underline">Nori on X</a> to get updates :D</p>
                <button
                  onClick={() => window.open('https://app.rebrowse.me', '_blank')}
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Try Rebrowse <Rocket className="inline-block w-4 h-4 ml-1" />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TryOutModal; 