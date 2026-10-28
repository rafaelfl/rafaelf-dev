"use client";

import { useLocale } from "next-intl";
import styles from "@/styles/marquee.module.css";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const locale = useLocale();

  return (
    <div key={locale} className={styles.fade}>
      {children}
    </div>
  );
}
