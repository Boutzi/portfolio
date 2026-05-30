import { Calendar, MapPin, ScrollText } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

export interface ExperienceCardProps {
  company: string;
  logo: string;
  banner: string;
  location: string;
  year: string;
  role: string;
  contract: string;
  description: string;
  skills: string[];
}

export const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <Card className="mx-auto flex p-8 gap-6 max-md:flex-col">
      <div className="relative group -m-8 mr-0 max-md:hidden">
        <div className="h-full w-64">
          <Image
            src={props.banner}
            alt={`${props.company} office`}
            fill
            className="w-full h-auto object-cover object-center rounded-lg rounded-r-none"
          />
        </div>
      </div>
      <div>
        <CardHeader className="border-b flex-row gap-4 items-start p-0 pb-4">
          <div className=" relative group">
            <div className="w-16 h-16 bg-white rounded-lg">
              <Image
                src={props.logo}
                alt={`${props.company} logo`}
                fill
                className="w-full h-auto object-cover object-center rounded-lg p-1"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-start justify-between w-full">
              <CardTitle className="text-2xl">{props.company}</CardTitle>
            </div>
            <div className="w-full">
              <CardDescription className="flex gap-6 items-center text-xs max-sm:flex-col max-sm:gap-1 max-sm:items-start">
                <span className="flex gap-1 items-center">
                  <MapPin size={14} />
                  {props.location}
                </span>
                <span className="flex gap-1 items-center">
                  <Calendar size={14} />
                  {props.year}
                </span>
                <span className="flex gap-1 items-center">
                  <ScrollText size={14} />
                  {props.contract}
                </span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex items-start flex-col p-0 py-4 w-full gap-4">
          <Badge className="text-lg border-primary">{props.role}</Badge>
          <div>
            <p className="leading-relaxed text-md">{props.description}</p>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4 px-0 pb-0 gap-2 flex-wrap">
          {props.skills.map((skill, index) => (
            <Badge
              key={index}
              variant={"outline"}
              className="font-light rounded-full overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {skill}
            </Badge>
          ))}
        </CardFooter>
      </div>
    </Card>
  );
};
