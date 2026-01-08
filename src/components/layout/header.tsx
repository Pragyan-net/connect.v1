import Link from "next/link";

export function Header() {
  const navItems = [
    { name: "Origin", href: "https://initative-v1.vercel.app" },
    { name: "Contact", href: "https://connectv1-three.vercel.app/" },
    { name: "Events", href: "https://eventportal-v1.vercel.app/" },
    { name: "Projects", href: "https://projects-v1.vercel.app/" },
  ];

  return (
    <header className="fixed top-4 z-50 flex w-full justify-center">
      <nav className="rounded-full bg-card/80 px-4 py-2 backdrop-blur-sm">
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
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
