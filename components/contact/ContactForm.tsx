"use client";

import Button from "@/components/ui/Button";

export default function ContactForm() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-8">
      <h2 className="text-2xl font-semibold">
        Send us a message
      </h2>

      <p className="mt-3 text-gray-400">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form className="mt-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium"
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="+92 300 1234567"
              className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium"
            >
              Subject
            </label>

            <select
              id="subject"
              className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-primary"
            >
              <option>Service Inquiry</option>
              <option>Project Discussion</option>
              <option>General Inquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium"
          >
            Message
          </label>

          <textarea
            id="message"
            rows={7}
            placeholder="Tell us about your project..."
            className="w-full resize-none rounded-lg border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-primary"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}