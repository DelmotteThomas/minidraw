import type { ElementType, ReactNode } from "react";
import type {
  CvEducation,
  CvIdentity,
  CvProject,
  CvSkillGroup,
  CvProjectPreviewFile,
} from "@/types/cv";

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type TextColor = "default" | "muted" | "bronze" | "white";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";
export type TextProps = {
  children: ReactNode;
  as?: ElementType;
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
  uppercase?: boolean;
  className?: string;
};

export type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type StackDirection = "row" | "column";
export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify = "start" | "center" | "end" | "between";
export type StackProps = {
  children: ReactNode;
  direction?: StackDirection;
  gap?: StackGap;
  align?: StackAlign;
  wrap?: boolean;
  className?: string;
  justify?: StackJustify;
};

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export type BadgeVariant = "default" | "outline" | "soft";
export type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};


export type DividerProps = {
  className?: string;
};

export type SkillGroupProps = {
  skillGroup: CvSkillGroup;
};

export type ProjectCardProps = {
  project: CvProject;
  onClick?: (project: CvProject) => void;
};

export type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  labelledBy?: string;
  className?: string;
};

export type CodeBlockProps = {
  code: string;
  className?: string;
};

export type ProjectFileTabsProps = {
  files: CvProjectPreviewFile[];
  selectedFile: CvProjectPreviewFile | null;
  onSelectFile: (file: CvProjectPreviewFile) => void;
};

export type GithubCodePreviewProps = {
  file: CvProjectPreviewFile | null;
};

export type ContactLinksProps = {
  email: string;
  github: string;
  linkedin?: string;
};

export type HeaderSectionProps = {
  identity: CvIdentity;
};

export type SkillsSectionProps = {
  skills: CvSkillGroup[];
};

export type ProjectsSectionProps = {
  projects: CvProject[];
};

export type ProjectPreviewModalProps = {
  project: CvProject | null;
  onClose: () => void;
};

export type EducationSectionProps = {
  education: CvEducation[];
};

export type ContactSectionProps = {
  identity: CvIdentity;
};
