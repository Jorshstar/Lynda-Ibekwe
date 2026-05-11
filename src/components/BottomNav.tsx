import { Home, Building2, User, FileText, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Building2, label: "Work", href: "/work", isRoute: true },
  { icon: User, label: "Skills", href: "/skills", isRoute: true },
  { icon: FileText, label: "Letter", href: "/letter", isRoute: true },
  { icon: MessageSquare, label: "Contact", href: "/contact", isRoute: true },
];

const BottomNav = () => {
  const [active, setActive] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/skills") {
      setActive("Skills");
      return;
    }

    if (location.pathname.startsWith("/work")) {
      setActive("Work");
      return;
    }

    if (location.pathname === "/contact") {
      setActive("Contact");
      return;
    }

    if (location.pathname === "/letter") {
      setActive("Letter");
      return;
    }

    const handleScroll = () => {
      const sections = ["home"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight / 2) {
          const item = navItems.find((n) => n.href === `#${id}`);
          if (item) setActive(item.label);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-2 py-2 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-lg">
        {navItems.map((item) => {
          const isActive = active === item.label;
          const commonClasses = `flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-colors ${
            isActive
              ? "bg-primary/15 text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`;

          if (item.isRoute) {
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setActive(item.label)}
                className={commonClasses}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          }

          return (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={commonClasses}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
