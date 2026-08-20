import { useState, type FormEvent } from "react";

import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { Mail, Link2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // This form currently has no backend wired up.
    // Hook this up to an email service (e.g. EmailJS, Formspree) or your own API.
    setSubmitted(true);
  };

  return (
    <Section className="py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Get In Touch</h1>
          <p className="text-gray-600 mt-2">Have a project in mind or just want to say hi? Send me a message.</p>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="mailto:duavisanalee98@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:border-gray-400 transition-colors"
          >
            <Mail className="w-4 h-4" /> duavisanalee98@gmail.com
          </a>
          <a
            href="#https://github.com/LeeAna856"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:border-gray-400 transition-colors"
          >
            <Link2 className="w-4 h-4" /> GitHub
          </a>
          <a
            href="#https://web.facebook.com/analee.duavis.1"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:border-gray-400 transition-colors"
          >
            <Link2 className="w-4 h-4" /> facebook
          </a>
        </div>

        {/* Contact form */}
        {submitted ? (
          <div className="text-center border border-gray-200 rounded-2xl p-10 bg-gray-50/50">
            <p className="text-lg font-semibold text-gray-900">Thanks for reaching out, {form.name || "there"}!</p>
            <p className="text-gray-600 mt-2">This is a demo form, so your message wasn't actually sent — but it's ready to be connected to a real email service.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 border border-gray-200 rounded-2xl p-8 bg-white">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 resize-none"
                placeholder="What would you like to talk about?"
              />
            </div>
            <Button type="submit" className="w-full h-11">Send Message</Button>
          </form>
        )}
      </div>
    </Section>
  )
}
