import { Header } from "@/components/layout/header";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <div id="origin" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-headline text-4xl font-bold text-foreground md:text-5xl">
              Origin
            </h2>
            <Card className="max-w-3xl mx-auto bg-card text-card-foreground shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-primary">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  A placeholder for the origin story of The Initiative.V1. This
                  section will detail our purpose, goals, and the vision that
                  drives us forward. We believe in the power of connection and
                  collaboration to build the future.
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
