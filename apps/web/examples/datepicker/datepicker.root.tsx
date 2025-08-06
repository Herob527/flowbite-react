import { Datepicker } from "@herob191/flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Datepicker } from "@herob191/flowbite-react";

export function Component() {
  return <Datepicker />;
}
`;

export function Component() {
  return <Datepicker />;
}

export const root: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "datepicker/datepicker.root.tsx",
  component: <Component />,
};
