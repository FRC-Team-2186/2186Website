"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Client-side placeholder — wire to API route / email service later
    await new Promise((r) => setTimeout(r, 600));
    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-electric/30 bg-electric/5 px-6 py-12 text-center">
        <CheckCircle2 className="mb-3 h-10 w-10 text-electric" />
        <h3 className="font-display text-xl font-semibold text-steel-100">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-steel-400">
          Thanks for reaching out. A mentor or student lead will follow up soon.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          required
          placeholder="Sponsorship, visit, general question…"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="How can we help?"
          rows={5}
        />
      </div>
      <Button type="submit" disabled={sending} variant="default" size="lg">
        {sending ? "Sending…" : "Send Message"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
