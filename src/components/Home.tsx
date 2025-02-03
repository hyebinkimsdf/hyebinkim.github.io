import { Link } from "react-router-dom";
import * as THREE from "three";
import { ProjectCard } from "./ProjectCard";

const projects = [
  { id: 1, name: "eyecane", link: "/eyecane", photo: "./" },
  { id: 2, name: "swim360", link: "/swim360" },
  { id: 3, name: "droneGo", link: "/droneGo" },
];

export function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* 배경 비디오 */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="object-cover w-full h-full"
          muted
          autoPlay
          loop
          playsInline
        >
          <source src="./main-bg-color.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 영상 위에 반투명한 하얀색 오버레이 */}
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-70 z-1"></div>

      <div className="flex absolute flex-wrap justify-center gap-6 w-full h-[80vh] overflow-hidden px-[10vw] z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black w-[20%] h-[60%] rounded-xl hover:bg-slate-300 my-auto 
                     flex-1 transition-all duration-300 ease-in-out hover:flex-[2] text-2xl hover:text-5xl hover:font-bold ron"
          >
            <Link to={project.link}>
              <ProjectCard name={project.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
