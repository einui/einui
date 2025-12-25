"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Home, Github, ExternalLink, Blocks } from "lucide-react";
import { generateNavigation } from "@/contants/nav-items";

function SidebarNavContent() {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [pathname]);

  const navigation = generateNavigation()

  return (
    <>
      <SidebarHeader className="border-b border-white/10 px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Blocks className="size-5" />
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        {/* Home Link */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/"}
                className={cn(
                  "rounded-xl transition-all duration-200",
                  pathname === "/"
                    ? "bg-white/15 text-white shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <Link href="/">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator className="bg-white/10 my-2" />

        {/* Navigation Sections */}
        {navigation.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="px-2 text-xs font-semibold uppercase tracking-wider text-white/40">
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu ref={navRef}>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      tooltip={item.title}
                      className={cn(
                        "rounded-xl transition-all duration-200 group/item",
                        pathname === item.href
                          ? "bg-linear-to-r from-cyan-500/20 to-purple-500/20 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                          : "text-white/60 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      <Link ref={pathname == item.href ? activeLinkRef : null} href={item.href}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    {item.isNew && (
                      <SidebarMenuBadge className="bg-cyan-500/20 text-cyan-400 text-[10px] font-medium rounded-full px-1.5">
                        New
                      </SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-white/10 p-4 space-y-3">
        <a
          href="https://github.com/ehsanghaffar/einui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5 hover:text-white transition-colors"
        >
          <Github className="h-4 w-4" />
          GitHub
          <ExternalLink className="ml-auto h-3 w-3" />
        </a>
        <div className="rounded-xl bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-3">
          <p className="text-xs text-white/50">
            Built by <span className="text-white/80 font-medium">Ehsan</span>
          </p>
        </div>
      </SidebarFooter>
    </>
  );
}

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="fixed left-0 top-0 z-40 hidden h-screen w-72 border-r border-white/10 bg-black/60 backdrop-blur-2xl lg:flex"
    >
      <SidebarNavContent />
    </Sidebar>
  );
}
