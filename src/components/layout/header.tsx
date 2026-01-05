import Link from "next/link";

export function Header() {
  const navItems = [
    { name: "Origin", href: "/origin" },
    { name: "Contact", href: "/contact" },
    { name: "Events", href: "/events" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="fixed top-4 z-50 flex w-full justify-center">
      <nav className="rounded-full bg-card/80 px-4 py-2 backdrop-blur-sm">
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-headline text-sm text-card-foreground/80 transition-colors hover:text-card-foreground"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
