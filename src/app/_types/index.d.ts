type Link = {
  link: string;
  label: string;
  key: string | number;
};

type PrimarySkill = {
  logo: JSX.Element;
  label: string;
};

type Section = {
  page: JSX.Element;
  className?: string;
  key: number | string;
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
  favorite?: boolean;
  className?: string;
}

interface ProjectItem {
  title: string;
  image: string;
  details: string;
  alt: string;
  tools: Tool[];
}
