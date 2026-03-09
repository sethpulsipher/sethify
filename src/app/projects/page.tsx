import { ProjectList } from "@/components/projects/ProjectList";
import { FinalCTA } from "@/components/home/FinalCTA";
import Landing from "@/components/common/Landing";

export const metadata = {
  title: "Projects | Sethify Web Design",
  description: "Browse our portfolio of custom-coded websites and automation solutions that drive results for small businesses.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Landing 
        title="Our Work"
        description="A selection of recent projects showcasing our commitment to performance, design, and tangible results."
      />
      <ProjectList />
      <FinalCTA />
    </div>
  );
}
