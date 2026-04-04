import { CppIcon } from "./icons/CppIcon";
import { CSharpIcon } from "./icons/CSharpIcon";
import { JavaIcon } from "./icons/JavaIcon";
import { JavaScriptIcon } from "./icons/JavaScriptIcon";
import { JupyterIcon } from "./icons/JupyterIcon";
import { PhpIcon } from "./icons/PhpIcon";
import { PythonIcon } from "./icons/PythonIcon";
import { RubyIcon } from "./icons/RubyIcon";
import { SwiftIconTwo } from "./icons/SwiftIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";

type DevLangProps = {
  language: string | undefined;
  className?: string;
};

const DEVLANGS = [
  {
    name: "Python",
    logo: <PythonIcon size={40} />,
    color: "blue-700",
  },
  {
    name: "TypeScript",
    logo: <TypeScriptIcon size={40} />,
    color: "blue-600",
  },
  {
    name: "JavaScript",
    logo: <JavaScriptIcon size={40} />,
    color: "yellow-500",
  },
  {
    name: "Java",
    logo: <JavaIcon size={40} />,
    color: "red-600",
  },
  {
    name: "C#",
    logo: <CSharpIcon size={40} />,
    color: "purple-700",
  },
  {
    name: "Ruby",
    logo: <RubyIcon size={40} />,
    color: "red-500",
  },
  {
    name: "PHP",
    logo: <PhpIcon size={40} />,
    color: "blue-600",
  },
  {
    name: "C++",
    logo: <CppIcon size={40} />,
    color: "blue-800",
  },
  {
    name: "Swift",
    logo: <SwiftIconTwo size={40} />,
    color: "orange-500",
  },
  {
    name: "Jupyter Notebook",
    logo: <JupyterIcon size={40} />,
    color: "orange-500",
  },
];

export const DevLang = ({ language, className }: DevLangProps) => {
  return (
    <div className={`inline-flex items-center rounded ${className || ""}`}>
      {DEVLANGS.map((lang, index) =>
        lang.name === language ? (
          <div key={index} className={`bg-accent/50 p-3 rounded`}>
            {lang.logo}
          </div>
        ) : null
      )}
    </div>
  );
};
