interface ProjectProp {
  name: string;
}

export function ProjectCard({ name }: ProjectProp) {
  return (
    <>
      <p className="text-white flex justify-center items-center w-[100%]  h-[100%] hover:text-black ">
        {name}
      </p>
    </>
  );
}
