"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Settings,
  Users,
  FileText,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Users },
  { name: "Services", href: "/services", icon: Settings },
  { name: "Portfolio", href: "/portfolio", icon: User },
  { name: "Contact", href: "/contact", icon: MessageSquare },
];

interface LayoutWithSidebarProps {
  children: React.ReactNode;
}

export default function LayoutWithSidebar({
  children,
}: LayoutWithSidebarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // For mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile sidebar after navigation completes
  useEffect(() => {
    if (mobileOpen) setMobileOpen(false);
  }, [pathname]);

  // Load collapsed state from localStorage on client side
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");
    if (savedState !== null) {
      setCollapsed(savedState === "true");
    }
  }, []);

  // Save collapsed state to localStorage
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", String(collapsed));
  }, [collapsed]);

  // Handle scroll detection for styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Toggle collapse state
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-screen z-40 transition-all duration-300 hidden lg:block",
          collapsed ? "w-20" : "w-64"
        )}
      >
        <div
          className={cn(
            "h-full flex flex-col bg-white border-r shadow-sm",
            scrolled ? "border-gray-200" : "border-transparent"
          )}
        >
          {/* Logo */}
          <div className="p-4 flex items-center justify-between border-b">
            <Link
              href="/"
              className={cn(
                "flex items-center",
                collapsed ? "justify-center" : ""
              )}
            >
              <div className="w-8 h-8">
                <Image src="/logo.png" width={40} height={40} alt="Logo" unoptimized />
              </div>
              {!collapsed && (
                <span className="ml-3 text-lg font-semibold">
                  Devchi Digital
                </span>
              )}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="p-1.5"
            >
              {collapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-3">
            <ul className="space-y-1 px-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center py-2.5 rounded-md transition-all",
                      pathname === item.href
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-100 text-gray-700",
                      collapsed ? "justify-center px-2" : "px-3"
                    )}
                    title={collapsed ? item.name : undefined}
                  >
                    <item.icon
                      className={cn(
                        "h-5 w-5",
                        pathname === item.href
                          ? "text-blue-600"
                          : "text-gray-500"
                      )}
                    />
                    {!collapsed && (
                      <span className="ml-3 font-medium">{item.name}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom section */}
          <div
            className={cn(
              "border-t p-4",
              collapsed ? "flex flex-col items-center space-y-3" : "space-y-2"
            )}
          >
            {collapsed ? (
              <>
                <Link href="/contact">
                  <Button
                    size="icon"
                    className="p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 cursor-pointer text-white"
                    title="Share with us"
                  >
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/contact" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 cursor-pointer text-white">
                    Share with us
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-40 bg-white shadow-sm">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8">
              <Image src="/logo.png" width={40} height={40} alt="Logo" unoptimized />
            </div>
            <span className="ml-3 text-lg font-semibold">Devchi Digital</span>
          </Link>

          {/* Mobile menu button */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="p-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[300px] sm:w-[350px]">
              <VisuallyHidden>
                <SheetTitle>Mobile navigation</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col h-full">
                <div className="p-4 border-b flex items-center">
                  <div className="w-8 h-8">
                    <Image src="/logo.png" width={40} height={40} alt="Logo" unoptimized />
                  </div>
                  <span className="ml-3 text-lg font-semibold">
                    Devchi Digital
                  </span>
                </div>

                <nav className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-2">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center py-2.5 px-3 rounded-md transition-all",
                            pathname === item.href
                              ? "bg-blue-50 text-blue-700"
                              : "hover:bg-gray-100 text-gray-700"
                          )}
                        >
                          <item.icon
                            className={cn(
                              "h-5 w-5",
                              pathname === item.href
                                ? "text-blue-600"
                                : "text-gray-500"
                            )}
                          />
                          <span className="ml-3 font-medium">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="border-t p-4 space-y-2">
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 cursor-pointer text-white">
                      Share with us
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Content area wrapper with proper padding */}
      <div
        className={cn(
          "transition-all duration-300",
          collapsed ? "lg:pl-20" : "lg:pl-64",
          "pt-16 lg:pt-0" // Add padding for mobile header
        )}
      >
        {/* Render the children */}
        {children}
      </div>
    </>
  );
}
