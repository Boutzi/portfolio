"use client";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";

export default function NavLink({
  href,
  exact = false,
  children,
  className,
  onClick,
  ...props
}: {
  href: string;
  exact?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const newClassName = isActive ? `${className} active` : className;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${newClassName} text-foreground hover:text-primary font-semibold [&.active]:text-primary`}
      {...props}
    >
      {children}
    </Link>
  );
}
