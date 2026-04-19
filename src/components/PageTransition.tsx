"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const locale = useLocale();

  return (
    <motion.div
      key={locale}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
