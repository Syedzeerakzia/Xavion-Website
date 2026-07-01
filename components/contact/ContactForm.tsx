"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Message sent successfully!", {
        description: "We’ll get back to you within 24 hours.",
      });
      form.reset();
    } else {
      toast.error("Failed to send message.");
    }
  }

  return (
    <div className="relative rounded-2xl border border-white/10 bg-linear-to-br from-[#0B1220] via-[#0F172A] to-[#020617] p-8 overflow-hidden">
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
      <h2 className="text-2xl font-semibold">
        Send us a message
      </h2>

      <p className="mt-3 text-gray-400">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
              required
              name="name"
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
              name="email"
              required
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
              name="phone"
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
              name="subject"
              required
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
            required
            name="message"
            rows={7}
            placeholder="Tell us about your project..."
            className="w-full resize-none rounded-lg border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-primary"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}