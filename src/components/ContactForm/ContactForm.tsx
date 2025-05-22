// ContactForm.tsx
import { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  formData: {
    name: string;
    email: string;
    message: string;
  };
  isSubmitting: boolean;
  submitSuccess: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
                                                   isOpen,
                                                   onClose,
                                                   onSubmit,
                                                   formData,
                                                   isSubmitting,
                                                   submitSuccess,
                                                   handleInputChange
                                                 }) => {
  const formRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed right-4 top-20 z-50 w-80 md:w-96 bg-black bg-opacity-50  transition-opacity duration-300">
      <div
        ref={formRef}
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-[#A12266] to-[#8a1c57] px-4 py-3 text-white">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Close contact form"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-5">
          {submitSuccess ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h4 className="mb-2 text-xl font-medium text-gray-800">Thank You!</h4>
              <p className="text-gray-600">
                Your message has been sent successfully. We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-800 transition-colors focus:border-[#A12266] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#A12266]"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-800 transition-colors focus:border-[#A12266] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#A12266]"
                  placeholder="youremail@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-800 transition-colors focus:border-[#A12266] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#A12266]"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-md bg-[#A12266] px-5 py-2.5 text-white transition-all hover:bg-[#8a1c57] focus:outline-none focus:ring-2 focus:ring-[#A12266] focus:ring-offset-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
