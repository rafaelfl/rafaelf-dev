import { ComponentProps } from "react";

type ContactSectionProps = ComponentProps<"section">;

const ContactSection = (props: ContactSectionProps) => {
  return (
    <section id="contact" {...props}>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
      <p>Main Content Here</p>
    </section>
  );
};

export default ContactSection;
