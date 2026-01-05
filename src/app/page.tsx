import { Header } from "@/components/layout/header";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <main className="relative z-10 bg-background">
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

        <div id="events" className="py-20 md:py-32 bg-background/50">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-headline text-4xl font-bold text-foreground md:text-5xl">
              Events
            </h2>
            <Card className="max-w-3xl mx-auto bg-card text-card-foreground shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-primary">
                  Upcoming Gatherings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  This is a placeholder for the Events section. Here we will
                  list upcoming events, meetups, and workshops. Stay tuned for
                  more information on how to get involved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div id="projects" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-headline text-4xl font-bold text-foreground md:text-5xl">
              Projects
            </h2>
            <Card className="max-w-3xl mx-auto bg-card text-card-foreground shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-primary">
                  Our Work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  This is a placeholder for the Projects section. Discover the
                  innovative projects our community is working on. From open
                  source initiatives to groundbreaking new technologies.
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
