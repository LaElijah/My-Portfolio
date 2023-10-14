type Link = {
  link: string;
  label: string;
  key: string | number;
};

type PrimarySkill = {
  logo: JSX.Element;
  label: string;
};

type Social = {
  label: string;
  link: string;
  icon: JSX.Element;
};

type Tool = {
  label: string;
  icon: JSX.Element;
};

interface ProjectItem {
  title: string;
  image: string;
  details: string;
  alt: string;
  tools: Tool[];
}
