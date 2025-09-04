'use client';
import Image from 'next/image'
import rebrowseLogo from '../../svgs/rebrowse-logo.png'
import { useState } from 'react';
import QRModal from '../components/QRModal';
import { Send } from 'lucide-react';

export default function Privacy() {
  const [isQROpen, setIsQROpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <QRModal isOpen={isQROpen} onClose={() => setIsQROpen(false)} />
      <div className="flex flex-col min-h-screen">
        <header className="w-full sticky top-0 z-50 bg-black/90 backdrop-blur">
          <div className="max-w-[1200px] mx-auto px-4 py-8">
            <nav className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center">
                  <Image
                    src={rebrowseLogo}
                    alt="Rebrowse Logo"
                    width={24}
                    height={24}
                    className="w-4 h-4 sm:w-6 sm:h-6"
                  />
                </div>
                <span className="text-lg sm:text-xl font-bold">Rebrowse</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                <a href="#" onClick={(e) => { e.preventDefault(); setIsQROpen(true); }} className="hover:text-purple-400 transition-colors text-xs sm:text-sm md:text-base flex items-center gap-1 cursor-pointer">
                  <img src="/svgs/qr.svg" alt="QR Code" width={20} height={20} className="mr-1" />
                  QR
                </a>
                <a href="https://n0ri.com" className="hover:text-purple-400 transition-colors text-xs sm:text-sm md:text-base flex items-center gap-1">
                  <img src="/svgs/hugging-face.svg" alt="Hugging Face" width={20} height={20} className="mr-1" />
                  Creator
                </a>
                <a 
                  href="https://github.com/zk1tty/rebrowse-app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1"
                  aria-label="GitHub"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm md:text-base">Github</span>
                </a>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-1 w-full">
          <div className="max-w-[800px] mx-auto px-4 py-8 sm:py-16">
            <div className="prose prose-invert max-w-none">
              <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
              
              <div className="space-y-6 text-gray-300">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">Single Purpose Statement</h2>
                  <p className="mb-4">
                    Rebrowse is a screen recording and workflow automation extension with a single purpose: to enable users to record their screen interactions and convert them into shareable, executable workflow automations. All data collection and processing is limited to supporting this core functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
                  <p className="mb-4">
                    To provide our screen recording and workflow automation service, we collect the following types of data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Screen Recording Data:</strong> Visual content, mouse movements, clicks, and keyboard inputs captured during your recording sessions</li>
                    <li><strong>Web Browsing Activity:</strong> URLs, page elements, and user interactions on websites - collected only during active recording sessions and solely for the purpose of generating workflow automations</li>
                    <li><strong>Account Information:</strong> Email address and basic profile information when you create an account</li>
                    <li><strong>Technical Data:</strong> Browser type, operating system, IP address, and extension version for functionality and security purposes</li>
                    <li><strong>Usage Analytics:</strong> Information about how you use the extension features to improve our service</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    <strong>Important:</strong> We only collect web browsing activity during active recording sessions initiated by you, and this data is used exclusively to create workflow automations as prominently described in our extension's functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
                  <p className="mb-4">
                    We limit our use of your data strictly to our single purpose of providing screen recording and workflow automation services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process your screen recordings to generate executable workflow automations</li>
                    <li>Store and organize your recordings and workflows in your account</li>
                    <li>Enable sharing of workflows when you choose to share them</li>
                    <li>Provide customer support and respond to your inquiries</li>
                    <li>Ensure the security and proper functioning of the extension</li>
                    <li>Send essential service communications related to your account</li>
                  </ul>
                  <p className="mt-4">
                    <strong>We do not:</strong> Use your data for advertising, marketing to third parties, or any purpose unrelated to our core screen recording and workflow automation functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">Data Sharing and Third Parties</h2>
                  <p className="mb-4">
                    We do not sell, trade, rent, or otherwise transfer your personal information to third parties. We only share your data in the following limited circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>User-Initiated Sharing:</strong> When you explicitly choose to share your workflows with others</li>
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our platform (e.g., cloud storage, analytics) and who are contractually bound to protect your data</li>
                    <li><strong>Legal Compliance:</strong> When required by law, legal process, or to protect our rights and safety</li>
                    <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets (with prior notice to users)</li>
                  </ul>
                  <p className="mt-4">
                    <strong>All third-party service providers:</strong> Are carefully vetted, contractually required to protect your data, and only receive the minimum data necessary to provide their specific service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">Data Storage and Security</h2>
                  <p className="mb-4">
                    We implement comprehensive security measures to protect your data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All recordings and data are encrypted during transmission using industry-standard TLS encryption</li>
                    <li>Data is encrypted at rest using AES-256 encryption</li>
                    <li>Access to your data is restricted to authorized personnel only and logged for security auditing</li>
                    <li>We use secure, SOC 2 compliant cloud infrastructure</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>You can delete your recordings and data at any time through your account settings</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">Data Retention</h2>
                  <p className="mb-4">
                    We retain your data only as long as necessary to provide our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Recording data: Retained until you delete it or close your account</li>
                    <li>Account information: Retained for the duration of your account</li>
                    <li>Usage analytics: Aggregated and anonymized data may be retained for service improvement</li>
                    <li>Upon account deletion: All personal data is permanently deleted within 30 days</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights and Choices</h2>
                  <p className="mb-4">
                    You have comprehensive control over your data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> View all personal data we have about you</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Delete your recordings, workflows, or entire account</li>
                    <li><strong>Data Portability:</strong> Export your workflows and recordings</li>
                    <li><strong>Recording Control:</strong> Start, stop, and delete recordings at any time</li>
                    <li><strong>Sharing Control:</strong> Choose which workflows to share and with whom</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, contact us at privacy@rebrowse.me or use your account settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">Chrome Web Store Compliance</h2>
                  <p className="mb-4">
                    This privacy policy complies with Chrome Web Store Developer Program Policies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We have clearly disclosed our single purpose: screen recording and workflow automation</li>
                    <li>All data collection is limited to supporting this declared functionality</li>
                    <li>Web browsing activity is collected only during active recording sessions for workflow generation</li>
                    <li>We do not collect, use, or transfer user data for purposes unrelated to our single purpose</li>
                    <li>All third-party data sharing is limited to necessary service providers bound by strict data protection agreements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">International Users</h2>
                  <p className="mb-4">
                    For users in the European Economic Area (EEA), United Kingdom, and other regions with specific privacy laws:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We process your data based on legitimate interest and consent for our core functionality</li>
                    <li>You have additional rights under GDPR including data portability and the right to be forgotten</li>
                    <li>Data transfers outside your region are protected by appropriate safeguards</li>
                    <li>You may contact our Data Protection Officer at privacy@rebrowse.me</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy, our data practices, or wish to exercise your privacy rights, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:privacy@rebrowse.me" className="text-purple-400 hover:text-purple-300">hello@rebrowse.me</a></p>
                    <p><strong>Support:</strong> <a href="mailto:support@rebrowse.me" className="text-purple-400 hover:text-purple-300">hello@rebrowse.me</a></p>
                    <p><strong>Response Time:</strong> We will respond to privacy inquiries within 30 days</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Policy</h2>
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We will post the updated policy on this page</li>
                    <li>We will update the "Last updated" date</li>
                    <li>For material changes, we will notify you via email or in-app notification</li>
                    <li>Continued use of our service after changes constitutes acceptance of the new policy</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-400">
                    <strong>Last updated:</strong> June 2025<br/>
                    <strong>Effective date:</strong> June 2025<br/>
                    <strong>Version:</strong> 0.1.0
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>

        <footer className="w-full">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 py-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center">
                  <Image
                    src={rebrowseLogo}
                    alt="Rebrowse Logo"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </div>
                <span className="text-sm sm:text-base font-bold">Rebrowse</span>
              </div>
              <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                <a href="#terms" className="hover:text-white transition-colors">Terms</a>
                <a href="#docs" className="hover:text-white transition-colors">Documentation</a>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <a href="https://x.com/n0rizkitty" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/zk1tty/rebrowse-app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 