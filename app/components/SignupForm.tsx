'use client';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto text-center animate-fade-in">
        <div className="bg-green-500/20 border border-green-500/40 rounded-md p-6">
          <div className="text-green-400 text-lg font-semibold mb-2">✓ You're on the list!</div>
          <p className="text-green-300 text-sm">We'll notify you when Rebrowse is ready.</p>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-4 animate-fade-in-up" 
      style={{ animationDelay: '0.6s' }}
    >
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex rounded-md border py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full h-14 bg-white/5 border-purple-500/20 glow-border text-lg px-6 focus:border-purple-500/40 transition-all duration-300 text-white placeholder-gray-400"
          placeholder="Enter your email address"
          required
          disabled={isSubmitting}
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting || !email.trim()}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white px-4 py-2 w-full h-14 text-lg font-semibold bg-purple-600 hover:bg-purple-500 neon-glow group transition-all duration-300 disabled:bg-gray-600"
      >
        {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}