import Link from "next/link";
import { VariantProps, tv } from "tailwind-variants";

const linkStyle = tv({
  base: "px-2 py-1 rounded-md text-base md:text-xl hover:no-underline active:opacity-80 font-medium w-min",
  variants: {
    intent: {
      default: "text-gray hover:text-white",
      active: "text-darkyellow hover:text-yellow",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

interface NavLinkProps extends VariantProps<typeof linkStyle> {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children, intent, ...rest }: NavLinkProps) => {
  return (
    <Link href={href} className={linkStyle({ intent })} {...rest}>
      {children}
    </Link>
  );
};
