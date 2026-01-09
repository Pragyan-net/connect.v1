import { Header } from "@/components/layout/header";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <HeroSection>
        <Header />
      </HeroSection>
      <main className="relative z-10 bg-background">
        <div id="origin" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-headline text-4xl font-bold text-foreground md:text-5xl">
              Origin
            </h2>
            <Card className="mx-auto max-w-3xl transform-gpu bg-card/30 text-card-foreground shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-headline font-bold text-foreground">
                  Connect with us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                 Join us on the ventures as we revloutnize th tech industry with open sourced tech that leads the world and beyond
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <ContactSection />
      </main>
    </>
  );
}
