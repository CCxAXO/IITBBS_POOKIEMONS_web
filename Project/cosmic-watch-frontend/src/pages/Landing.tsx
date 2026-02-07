import { useNavigate } from "react-router-dom";
import { Orbit, Rocket, Shield, Activity, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Orbit,
      title: "Real-Time Tracking",
      description: "Monitor near-Earth objects as they approach our planet with live NASA data.",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Advanced algorithms calculate threat levels for each detected asteroid.",
    },
    {
      icon: Activity,
      title: "Live Statistics",
      description: "Comprehensive analytics on velocity, distance, and orbital patterns.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated star field background */}
      <div className="absolute inset-0 star-field" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Orbit className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">Cosmic Watch</span>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="container mx-auto px-4 pt-16 pb-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm">
              <span className="w-2 h-2 rounded-full bg-risk-low animate-pulse" />
              <span className="text-muted-foreground">Powered by NASA NeoWs API</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              <span className="text-foreground">Monitor </span>
              <span className="text-gradient-cosmic">Near-Earth</span>
              <br />
              <span className="text-foreground">Objects in Real-Time</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Track asteroids approaching Earth, analyze potential risks, and explore the cosmos 
              with our advanced monitoring dashboard.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                onClick={() => navigate("/dashboard")}
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Launch Dashboard
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-xl border-border/50 hover:bg-secondary/50"
                onClick={() => window.open("https://api.nasa.gov", "_blank")}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: "24/7", label: "Monitoring" },
              { value: "NASA", label: "Data Source" },
              { value: "Real-time", label: "Updates" },
              { value: "100+", label: "Objects Tracked" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="cosmic-card rounded-xl p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-2xl md:text-3xl font-display font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-24 max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              <span className="text-gradient-cosmic">Powerful Features</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="cosmic-card rounded-xl p-6 border border-border/50 transition-all duration-300 hover:border-primary/30 hover:cosmic-glow animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              Built by Pookiemons • Data by{" "}
              <a 
                href="https://api.nasa.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                NASA
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
