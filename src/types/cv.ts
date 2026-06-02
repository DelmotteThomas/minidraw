export type CvIdentity = {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  summary: string;
};

export type CvSkillGroup = {
  title: string;
  items: string[];
};

export type CvProject = {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  previewFiles?: CvProjectPreviewFile[];
};

export type CvProjectPreviewFile = {
  label: string;
  path: string;
  rawUrl: string;

};


export type CvEducation = {
  title: string;
  period: string;
};

export type CvData = {
  identity: CvIdentity;
  skills: CvSkillGroup[];
  projects: CvProject[];
  education: CvEducation[];
};