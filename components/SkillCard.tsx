import type { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  image: ReactNode;
  level?: number;
  description?: string;
  category?: string;
}

export const SkillCard = (props: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      {props.image}
      <div className="flex items-center w-full flex-col gap-2">
        <h3 className="text-md whitespace-nowrap">{props.name}</h3>
      </div>
    </div>
  );
};
