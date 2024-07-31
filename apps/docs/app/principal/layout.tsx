"use client";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LayoutPrincipal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <div className={styles.container}>
      <div>
        <Button appName={path} className={styles.secondary}>
          <Link href="/">Home</Link>
        </Button>
      </div>
      {children}
    </div>
  );
}
