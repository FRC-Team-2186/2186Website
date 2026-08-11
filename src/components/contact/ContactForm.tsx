"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import teamData from "@/data/teamData.json";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const { to, cc } = teamData.team.contact.form;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const params = new URLSearchParams({
      subject: subject || `Message from ${name}`,
      body,
    });
    if (cc.length > 0) {
      params.set("cc", cc.join(","));
    }

    window.location.href = `mailto:${to}?${params.toString()}`;
    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-electric/30 bg-electric/5 px-6 py-12 text-center">
        <CheckCircle2 className="mb-3 h-10 w-10 text-electric" />
        <h3 className="font-display text-xl font-semibold text-steel-100">
          Opening your email app
        </h3>
        <p className="mt-2 max-w-sm text-sm text-steel-400">
          Your message will go to {to}
          {cc.length > 0 ? `, with ${cc.join(" and ")} CC’d` : ""}. If nothing
          opened, check your default mail client.
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
        {sending ? "Opening…" : "Send Message"}
        <Send className="h-4 w-4" />
      </Button>
      <p className="text-xs text-steel-500">
        Sends to {to} and CC’s {cc.join(", ")}.
      </p>
    </form>
  );
}
