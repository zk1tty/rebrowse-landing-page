'use client';

import React, { useState, FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call (replace with actual API endpoint)
    try {
      // Here you would typically make an API call to save the email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .glow-border {
          transition: all 0.3s ease;
          box-shadow: 0 0 0 1px rgba(168, 85, 247, 0.2);
        }
        
        .glow-border:focus {
          box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.4),
                      0 0 20px rgba(168, 85, 247, 0.2);
        }
        
        .neon-glow {
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.4),
                      0 0 40px rgba(168, 85, 247, 0.2);
          transition: all 0.3s ease;
        }
        
        .neon-glow:hover {
          box-shadow: 0 0 25px rgba(168, 85, 247, 0.5),
                      0 0 50px rgba(168, 85, 247, 0.3);
        }
      `}</style>
      
      <form 
        onSubmit={handleSubmit}
        className="space-y-4 animate-fade-in-up"
        style={{ animationDelay: '0.6s' }}
      >
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex rounded-md border py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full h-14 bg-white/5 border-purple-500/20 glow-border text-lg px-6 focus:border-purple-500/40 transition-all duration-300 text-white"
            placeholder="Enter your email address"
            disabled={isLoading}
            required
          />
        </div>
        
        {error && (
          <p className="text-red-400 text-sm animate-fade-in-up">{error}</p>
        )}
        
        {isSuccess && (
          <p className="text-green-400 text-sm animate-fade-in-up">
            🎉 Successfully joined the waitlist! We'll be in touch soon.
          </p>
        )}
        
        <button
          type="submit"
          disabled={isLoading || isSuccess}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-black px-4 py-2 w-full h-14 text-lg font-semibold bg-purple-500 hover:bg-purple-400 neon-glow group transition-all duration-300"
        >
          {isLoading ? (
            <span>Joining...</span>
          ) : isSuccess ? (
            <span>Welcome aboard! 🚀</span>
          ) : (
            <>
              Join the Waitlist
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;