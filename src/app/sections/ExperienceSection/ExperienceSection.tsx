import { ComponentProps } from "react";

import { sectionTitleStyle } from "@/app/styles/titleStyle";
import Accordion from "@/app/components/Accordion/Accordion";
import Chip from "@/app/components/Chip/Chip";
import Link from "next/link";

type ExperienceSectionProps = ComponentProps<"section">;

const ExperienceSection = (props: ExperienceSectionProps) => {
  return (
    <section id="experience" {...props}>
      <h2
        className={sectionTitleStyle({
          decoration: "underline",
          size: "large",
          className: "mt-8 mb-6",
        })}
      >
        Experience
      </h2>

      <Accordion title="Senior Software Engineer · Fullstack Labs" period="2022 - Present">
        <div className="flex flex-col justify-start items-start">
          <p>
            Delivering high quality web and mobile software products for our customers, including
            Fueled and Encyclopaedia Britannica
          </p>
          <div className="flex flex-row flex-wrap gap-3 pt-4 pb-2">
            <Chip>React.js</Chip>
            <Chip>Next.js</Chip>
            <Chip>Javascript</Chip>
            <Chip>Typescript</Chip>
            <Chip>SCSS</Chip>
          </div>
        </div>
      </Accordion>

      <Accordion title="CTO & Lead Developer · ImaginaKIDS" period="2017 - 2022">
        <div className="flex flex-col justify-start items-start">
          <p>
            ImaginaKIDS is an EdTech startup which provides tools for students to create their own
            books. Those stories can be distributed as ebooks or can be printed. Our startup has
            improved the reading and writing skills of 7k+ students and 100+ teachers. More than
            150k pages were created using our platform.
          </p>
          <div className="flex flex-row flex-wrap gap-3 pt-4 pb-2">
            <Chip>React.js</Chip>
            <Chip>React Native</Chip>
            <Chip>Node.js</Chip>
            <Chip>Javascript</Chip>
            <Chip>Typescript</Chip>
            <Chip>Express</Chip>
            <Chip>Firebase</Chip>
            <Chip>Swift</Chip>
            <Chip>Redis</Chip>
            <Chip>Socket.IO</Chip>
          </div>
        </div>
      </Accordion>

      <Accordion
        title="Professor, Researcher and Tech Lead · Federal University of Maranhão (UFMA) & Federal Institute of Technology of Maranhão (IFMA)"
        period="2006 - 2022"
      >
        <div className="flex flex-col justify-start items-start">
          <p>
            At UFMA and IFMA I have contributed to the formation of hundreds of students, teaching
            in undergraduate and post-graduate Computer Science courses, teaching in both basic
            courses, such as &ldquo;Algorithms and Data Structures&rdquo; and &ldquo;Object Oriented
            Programming&rdquo;, and also in technical courses, such as &ldquo;Development of Mobile
            Applications&rdquo; and &ldquo;Distributed Systems&rdquo;. Additionally, I have acted as
            manager, supervisor, consultant and tech lead on several Research, Development &
            Innovation software projects, using different technologies.
          </p>
          <div className="flex flex-row flex-wrap gap-3 pt-4 pb-2">
            <Chip>React.js</Chip>
            <Chip>Node.js</Chip>
            <Chip>Express</Chip>
            <Chip>Javascript</Chip>
            <Chip>Typescript</Chip>
            <Chip>Firebase</Chip>
            <Chip>MySQL</Chip>
            <Chip>Socket.IO</Chip>
            <Chip>RabbitMQ</Chip>
            <Chip>gRPC</Chip>
          </div>
        </div>
      </Accordion>

      <Accordion title="Web Developer · Federal University of Maranhão (UFMA)" period="2004 - 2006">
        <div className="flex flex-col justify-start items-start">
          <p>
            I have worked at the UFMA&lsquo;s Information Technology Center as a Systems Analyst and
            Web Developer, supporting the university&lsquo;s website and other web systems
          </p>
          <div className="flex flex-row flex-wrap gap-3 pt-4 pb-2">
            <Chip>PHP</Chip>
            <Chip>J2EE</Chip>
            <Chip>JSP</Chip>
            <Chip>JSF</Chip>
            <Chip>JPA</Chip>
          </div>
        </div>
      </Accordion>

      <Accordion
        title="Web Developer · Foundation of Research Support of the State of Maranhao - Fapema"
        period="2003 - 2005"
        className="mb-10"
      >
        <div className="flex flex-col justify-start items-start">
          <p>
            I have worked as a web developer, implementing and maintaining the Fapema&lsquo;s
            website and a web information management information system
          </p>
          <div className="flex flex-row flex-wrap gap-3 pt-4 pb-2">
            <Chip>PHP</Chip>
            <Chip>MySQL</Chip>
          </div>
        </div>
      </Accordion>

      <Link href="/cv.pdf" target="_blank" className="text-2xl underline font-medium mb-10">
        View Full Résumé (in PDF format) &rarr;
      </Link>
    </section>
  );
};

export default ExperienceSection;
