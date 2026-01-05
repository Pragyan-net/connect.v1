import { Card, CardContent } from "@/components/ui/card";
import { Github, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { DiscordIcon } from "../icons/discord-icon";

const contactLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram className="size-8" />,
  },
  {
    name: "Discord",
    href: "https://discord.com",
    icon: <DiscordIcon className="size-8" />,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: <Github className="size-8" />,
  },
  {
    name: "Email",
    href: "mailto:hello@initiative.v1",
    icon: <Mail className="size-8" />,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-headline text-4xl font-bold text-foreground md:text-5xl">
          Connect
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full transform-gpu bg-card text-card-foreground transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
                  <div className="text-primary transition-colors duration-300 ease-in-out group-hover:text-accent">
                    {link.icon}
                  </div>
                  <p className="font-headline text-lg font-medium">
                    {link.name}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
