'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const SignUpForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xjkwgdjd");
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (state.succeeded) {
      setEmail('');
    }
  }, [state.succeeded]);

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await handleSubmit(formData);
  };

  return (
    <form 
      className="max-w-md mx-auto space-y-4 animate-fade-in-up" 
      style={{ animationDelay: '0.6s' }}
      onSubmit={onSubmitForm}
    >
      <div className="relative">
        <input 
          type="email" 
          name="email"
          className="flex rounded-md border py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full h-10 sm:h-14 bg-stone-800/50 border-purple-500/20 glow-border text-sm sm:text-lg px-4 sm:px-6 text-white placeholder:text-stone-400 focus:border-purple-500/40 transition-all duration-300" 
          placeholder="Enter your email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={state.submitting}
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <button 
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white px-4 py-2 w-full h-10 sm:h-14 text-sm sm:text-lg font-semibold bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 neon-glow group transition-all duration-300" 
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? 'Welcome...' : 'Get early access'}
        <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};

export default SignUpForm;
