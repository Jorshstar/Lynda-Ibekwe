import { ArrowLeft, Mail, Phone, Linkedin, Twitter, MessageSquare, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-3xl font-bold">Get In Touch</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your CRM?</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how we can automate your CRM, supercharge your sales pipeline, and eliminate manual workflows.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Book a Call Card */}
          <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2 text-xl">
                <MessageSquare className="w-5 h-5" />
                Schedule a Call
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Book a 30-minute free consultation to discuss your CRM and automation needs.
              </p>
              <a
                href="https://cal.com/lyndaibekwe/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Book Free Call
              </a>
            </CardContent>
          </Card>

          {/* Get In Touch Card */}
          <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2 text-xl">
                <Mail className="w-5 h-5" />
                Direct Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Have a quick question? Send Lynda an email directly.
              </p>
              <a
                href="mailto:lynda.ibekwe@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors"
              >
                Send Email
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-primary">Connect With Me</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all hover:border-l-primary/50">
              <CardContent className="pt-6">
                <a
                  href="https://www.linkedin.com/in/lyndaibekwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all hover:border-l-primary/50">
              <CardContent className="pt-6">
                <a
                  href="https://x.com/lyndaibekwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                  <span className="font-medium">Twitter/X</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all hover:border-l-primary/50">
              <CardContent className="pt-6">
                <a
                  href="https://www.instagram.com/lyndaibekwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Music className="w-6 h-6" />
                  <span className="font-medium">Instagram</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-primary">Send Me a Message</h3>
          <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 text-center">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Spacer */}
        <div className="h-24" />
      </div>
    </div>
  );
};

export default Contact;
