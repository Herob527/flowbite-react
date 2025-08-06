import { Progress } from "@herob191/flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Progress } from "@herob191/flowbite-react";

export function Component() {
  return <Progress progress={45} />;
}
`;

export function Component() {
  return <Progress progress={45} />;
}

export const root: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "progress/progress.root.tsx",
  component: <Component />,
};
