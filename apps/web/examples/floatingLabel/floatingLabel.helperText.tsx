import { FloatingLabel, HelperText } from "@herob191/flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { FloatingLabel, HelperText } from "@herob191/flowbite-react";

export function Component() {
  return (
    <>
      <FloatingLabel variant="filled" label="Floating Helper" />
      <HelperText>Remember, contributions to this topic should follow our Community Guidelines.</HelperText>
    </>
  );
}
`;

export function Component() {
  return (
    <>
      <FloatingLabel variant="filled" label="Floating Helper" />
      <HelperText>Remember, contributions to this topic should follow our Community Guidelines.</HelperText>
    </>
  );
}

export const helperText: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "floatingLabel/floatingLabel.helperText.tsx",
  component: <Component />,
};
