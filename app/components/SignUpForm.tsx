'use client'
import React, { useState, useEffect } from 'react';
import { Puzzle, Copy as CopyIcon, Check, Cloud } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const SignUpForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xjkwgdjd");
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const installCommand = 'npx rebrowse';

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

  const handleCopyDocker = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (_) {
      // noop
    }
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      {!state.succeeded && (
        <form onSubmit={onSubmitForm} aria-label="Hero Download Form" className="w-full">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch">
            <div className="relative flex-1">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                disabled={state.submitting}
                className="w-full h-12 sm:h-14 rounded-md bg-stone-800/60 border border-purple-500/20 px-4 sm:px-5 text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/40 transition"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="h-12 sm:h-14 px-5 sm:px-6 rounded-md bg-white text-black font-semibold whitespace-nowrap hover:bg-stone-100 transition disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
            >
              <img
                src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
                alt="Google Chrome"
                className="h-5 w-5"
                loading="lazy"
              />
              {state.submitting ? 'Please wait...' : 'Try Rebrowse'}
            </button>
          </div>

          {/* Generic error message intentionally omitted; field-level errors are shown above. */}

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/zk1tty/rebrowse-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition px-4 py-2"
            >
              <span className="text-white">Star on GitHub</span>
              <img className="ml-2 h-5 w-5" alt="github logo" src="https://cdn.prod.website-files.com/688d40041a6f7dfca2e9b515/68c83c3d33dde7a684a8f690_github.svg" />
            </a>
            <div className="flex items-center gap-4">
              <a href="https://discord.gg/Z8AMERgZ" target="_blank" rel="noopener noreferrer">
                <img alt="Discord" className="h-5 w-5" src="https://cdn.prod.website-files.com/688d40041a6f7dfca2e9b515/68df15429861e98f202bfba8_discord-icon.svg" />
              </a>
              <a href="https://x.com/n0rikitty" target="_blank" rel="noopener noreferrer">
                <img alt="X logo" className="h-5 w-5" src="https://cdn.prod.website-files.com/688d40041a6f7dfca2e9b515/68c843eb737d1ddcf5404f8c_new-twitter.svg" />
              </a>
            </div>
          </div>
        </form>
      )}

      {state.succeeded && (
        <div className="mt-4 mx-auto max-w-xl rounded-2xl border border-white/10 bg-black/70 p-6 sm:p-8 text-center text-white ring-1 ring-purple-400/30 shadow-[0_0_30px_rgba(168,85,247,0.25)]" role="region" aria-label="Hero Download Form success">
          <div className="flex flex-col items-center gap-3">
            <img
              src="https://cdn.prod.website-files.com/688d40041a6f7dfca2e9b515/68cae9088d6cde5f915c58b8_checkmark-circle-02.svg"
              loading="lazy"
              alt="Success"
              className="h-12 w-12"
            />
            <div className="font-semibold text-lg sm:text-xl">You're all set!</div>
          </div>
          <div className="mt-2 text-md text-stone-200">
            Join <a href="https://discord.gg/YKwjt5vuKr" className="underline text-purple-300 hover:text-purple-200" target="_blank" rel="noreferrer">Discord</a> to share your feedback and suggest features!
          </div>

          {/* Packages list */}
          <div className="mt-6 space-y-4">
          <div className="mt-2 text-md text-stone-200">
              Quick start!
            </div>
            <a
              href="https://chromewebstore.google.com/detail/fedihgolnjheimplodebfklbncpkamgg?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Rebrowse Recorder Chrome Extension"
              className="rounded-2xl border border-white/10 bg-white/5 text-white px-4 py-3 flex items-center justify-center gap-3 ring-1 ring-white/10 hover:ring-purple-400/40 transition-shadow shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:bg-purple-500/40 transition-colors"
            >
              <img alt="Google Chrome" className="h-5 w-5" src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" />
              <span>Rebrowse Recorder (Chrome Extension)</span>
            </a>
            <a
              href="https://app.rebrowse.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Rebrowse App"
              className="rounded-2xl border border-white/10 bg-white/5 text-white px-4 py-3 flex items-center justify-center gap-3 ring-1 ring-white/10 hover:ring-purple-400/40 transition-shadow shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:bg-purple-500/40 transition-colors"
            >
              <Cloud className="h-5 w-5" aria-hidden="true" />
              <span>Rebrowse App to try Cloud Run</span>
            </a>
            <div className="mt-2 text-md text-stone-200">
              Do you want to self host?
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 text-white px-4 py-3 ring-1 ring-white/10 hover:ring-purple-400/40 transition-shadow shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <div className="flex items-center justify-center gap-2">
                <div className="font-medium">Install with npm(Coming soon!)</div>
              </div>
              <div className="mt-3 relative max-w-full">
                <pre className="rounded bg-black/60 text-stone-100 px-3 py-2 text-xs sm:text-sm overflow-x-auto border border-white/10">
<code>{installCommand}</code>
                </pre>
                <button
                  type="button"
                  onClick={handleCopyDocker}
                  aria-label="Copy Docker command"
                  className="absolute right-2 top-2 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 text-white p-1"
                >
                  {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <CopyIcon className="h-4 w-4" aria-hidden="true" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
