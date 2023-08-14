import ProjectItem from "@/app/components/ProjectItem/ProjectItem";

const AuthApiProject = () => {
  return (
    <ProjectItem
      about="An authentication API that implements a refresh token rotation scheme (based on JWT
        tokens) and token reuse detection using Node.js, Express, Passport and Typescript. This
        project has the following functionalities: user registration, sign in/sign out, refresh
        access tokens, retrieve and update user profiles, admin features (create new accounts,
        retrieve complete user lists, retrieve and update individual users, delete users), mock
        protected routes, and retrieve sample data with pagination. It can be used as an
        starting point for studying about the authentication process by both frontend and
        backend developers. All data is stored in a MongoDB database and the token invalidation
        works with Redis database."
      sourceCode="https://github.com/rafaelfl/express-typescript-auth"
      documentation="https://api.rafaelf.dev/api-docs/"
      livePreview="https://api.rafaelf.dev/"
      technologies="Node.js, Express, Express Validator, Passport, Swagger, MongoDB, Redis, Docker"
    />
  );
};

export default AuthApiProject;
