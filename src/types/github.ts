export type GithubFileStatus = "idle" | "loading" | "success" | "error";

export type UseGithubFileReturn = {
  code: string;
  status: GithubFileStatus;
  isIdle: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};