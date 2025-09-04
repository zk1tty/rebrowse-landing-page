'use client';
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({ isOpen, onClose }: EventModalProps) {
  const [state, handleSubmit] = useForm("xrbaokbl"); // Replace with your actual form ID

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

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
            className="bg-[#171717] p-4 sm:p-8 rounded-2xl max-w-xs sm:max-w-md w-full mx-2 sm:mx-4 max-h-[90vh] overflow-y-auto text-sm sm:text-base"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                Showcase
              </h2>
              <div className="flex items-center justify-center gap-4 text-zinc-400 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Sep 27, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>The Residency</span>
                </div>
              </div>
            </div>

            {!state.succeeded ? (
              <>
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="xHandle" className="block text-sm font-medium text-zinc-400">
                  X handle
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-zinc-400 text-sm">@</span>
                  </div>
                  <input
                    type="text"
                    id="xHandle"
                    name="xHandle"
                    required
                    className="w-full pl-8 pr-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-pink-500 focus:outline-none"
                    placeholder="username"
                  />
                </div>
                <ValidationError
                  prefix="X Handle"
                  field="xHandle"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-pink-500 focus:outline-none"
                  placeholder="pg@ycombinator.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-zinc-400">
                  Company website
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-pink-500 focus:outline-none"
                  placeholder="Y Combinator"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-medium text-zinc-400">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-pink-500 focus:outline-none"
                  placeholder="Founder"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:border-pink-500 focus:outline-none resize-none"
                  placeholder="hint: your favorite charactor from 'Silicon Valley'"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {state.submitting ? 'Submitting...' : 'RSVP for Showcase'}
              </button>
            </form>
              </>
            ) : (
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">RSVP done!</h3>
                <p className="text-zinc-400 mb-4">follow
                <a href="https://x.com/n0rizkitty" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline"> @n0rizkitty </a>
                on X!
                </p>
              </div>
            )}

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-zinc-400">
                I'll send you invitation email.<br />
                Not in SF? Join us our livestream!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
