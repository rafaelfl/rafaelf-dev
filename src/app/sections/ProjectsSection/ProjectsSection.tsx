import { ComponentProps } from "react";

import { sectionTitleStyle } from "@/app/styles/titleStyle";
import Animated from "@/app/components/Animated/Animated";

import ImaginaKIDSProject from "./projects/ImaginaKIDSProject";
import ImaginaWebProject from "./projects/ImaginaWebProject";
import ImaginaShoppingProject from "./projects/ImaginaShoppingProject";
import SheldonProject from "./projects/SheldonProject";
import GitrendProject from "./projects/GitrendProject";
import ModosProject from "./projects/ModosProject";
import Link from "next/link";

type ProjectsSectionProps = ComponentProps<"section">;

const ProjectsSection = (props: ProjectsSectionProps) => {
  return (
    <section id="projects" {...props}>
      <Animated animation="lateralLeftFade">
        <h2
          className={`${sectionTitleStyle({ decoration: "underline", size: "large" })} mt-8 mb-6`}
        >
          Some Projects
        </h2>
      </Animated>

      {/* ImaginaKIDS */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>ImaginaKIDS</h3>
      </Animated>

      <ImaginaKIDSProject />

      {/* ImaginaWeb */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>ImaginaWeb</h3>
      </Animated>

      <ImaginaWebProject />

      {/* ImaginaShopping */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>ImaginaShopping</h3>
      </Animated>

      <ImaginaShoppingProject />

      {/* Sheldon */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>SHELDON</h3>
      </Animated>

      <SheldonProject />

      {/* GiTrend */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>GiTrend</h3>
      </Animated>

      <GitrendProject />

      {/* Modos */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>Modos</h3>
      </Animated>

      <ModosProject />

      {/* Express Auth API */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>Express Node.js Auth API</h3>
      </Animated>

      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }} className="mb-20">
        <div className="flex flex-col">
          <h4 className="text-2xl text-darkblue">About</h4>
          <p className="text-base mb-4 text-lightgray">
            An authentication API that implements a refresh token rotation scheme (based on JWT
            tokens) and token reuse detection using Node.js, Express, Passport and Typescript. This
            project has the following functionalities: user registration, sign in/sign out, refresh
            access tokens, retrieve and update user profiles, admin features (create new accounts,
            retrieve complete user lists, retrieve and update individual users, delete users), mock
            protected routes, and retrieve sample data with pagination. It can be used as an
            starting point for studying about the authentication process by both frontend and
            backend developers. All data is stored in a MongoDB database and the token invalidation
            works with Redis database.
          </p>

          <h4 className="text-2xl text-darkblue">Source code</h4>
          <Link
            className="text-base mb-4 text-lightgray hover:underline"
            href="https://github.com/rafaelfl/express-typescript-auth"
            target="_blank"
          >
            https://github.com/rafaelfl/express-typescript-auth
          </Link>

          <h4 className="text-2xl text-darkblue">Live preview</h4>
          <Link
            className="text-base text-lightgray hover:underline"
            href="https://api.rafaelf.dev/"
            target="_blank"
          >
            https://api.rafaelf.dev/
          </Link>

          <Link
            className="text-base mb-4 text-lightgray hover:underline"
            href="https://api.rafaelf.dev/api-docs/"
            target="_blank"
          >
            https://api.rafaelf.dev/api-docs/
          </Link>

          <h4 className="text-2xl text-darkblue">Technologies</h4>
          <p className="text-base text-lightgray">
            Node.js, Express, Express Validator, Passport, Swagger, MongoDB, Redis, Docker
          </p>
        </div>
      </Animated>

      {/* Web3 Contract Vulnerability Detector API (POC) */}
      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }}>
        <h3 className={sectionTitleStyle()}>Web3 Contract Vulnerability Detector API (POC)</h3>
      </Animated>

      <Animated animation="lateralLeftFade" style={{ transitionDelay: "0.4s" }} className="mb-20">
        <div className="flex flex-col">
          <h4 className="text-2xl text-darkblue">About</h4>
          <p className="text-base mb-4 text-lightgray">
            A simple POC (Proof of Concept) API that uses CLI tools for inspecting and detecting
            security issues on Web3 Smart Contracts written in Solidity. The API receives a Solidity
            source code as input and, after running some tools on the received code (currently the
            Slither and Mythril are used), the API returns the vulnerabilities found by the tools.
            Since it is just a POC, only two vulnerabilities are supported: Unchecked Call Return
            Value (SWC-104), and Unprotected SELFDESTRUCT Instruction (SWC-106). This API also
            includes a suggestions API, that uses OpenAI ChatGPT API to try to find suggestions for
            improving the security of the input Solidity source codes.
          </p>

          <h4 className="text-2xl text-darkblue">Source code</h4>
          <Link
            className="text-base mb-4 text-lightgray hover:underline"
            href="https://github.com/rafaelfl/web3-security-contract-detector"
            target="_blank"
          >
            https://github.com/rafaelfl/web3-security-contract-detector
          </Link>

          <h4 className="text-2xl text-darkblue">Technologies</h4>
          <p className="text-base text-lightgray">
            Node.js, Express, Swagger, OpenAI ChatGPT API, Docker
          </p>
        </div>
      </Animated>
    </section>
  );
};

export default ProjectsSection;
