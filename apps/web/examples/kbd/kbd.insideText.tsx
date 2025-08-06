import { Kbd } from "@herob191/flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Kbd } from "@herob191/flowbite-react";

export function Component() {
  return (
    <>
      Please press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> to re-render an MDN page.
    </>
  );
}
`;

export function Component() {
  return (
    <>
      Please press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> to re-render an MDN page.
    </>
  );
}

export const insideText: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "kbd/kbd.insideText.tsx",
  component: <Component />,
};
