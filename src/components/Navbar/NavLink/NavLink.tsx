import Link from "next/link";
import { VariantProps, tv } from "tailwind-variants";

const link = tv({
  base: "px-2 py-1 rounded-md text-base md:text-xl hover:no-underline active:opacity-80",
  variants: {
    intent: {
      default: "text-gray hover:text-white font-medium",
      active: "text-darkyellow hover:text-yellow font-medium",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

interface NavLinkProps extends VariantProps<typeof link> {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children, intent, ...rest }: NavLinkProps) => {
  return (
    <Link href={href} className={link({ intent })} {...rest}>
      {children}
    </Link>
  );
};
