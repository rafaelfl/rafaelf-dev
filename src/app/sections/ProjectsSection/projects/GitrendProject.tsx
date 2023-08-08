import ProjectItem from "@/app/components/ProjectItem/ProjectItem";
import { gitrendMedias } from "@/app/constants";

const GitrendProject = () => {
  return (
    <ProjectItem
      medias={gitrendMedias}
      about="GiTrend is a web application that allows to search for trending repositories and users in GitHub. Through this application it is possible to search for trending repositories by text (title, description or readme), and by programming language. It is possible to tag some of the repositories as favorites, or filter only the favorites. A list of trending users is also shown."
      sourceCode="https://github.com/rafaelfl/gitrend"
      livePreview="https://gitrend.netlify.app/"
      technologies="React.js, Styled Components, Redux, GitHub API"
    />
  );
};

export default GitrendProject;
