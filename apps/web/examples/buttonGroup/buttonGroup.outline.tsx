import { Button, ButtonGroup } from "@herob191/flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Button, ButtonGroup } from "@herob191/flowbite-react";

export function Component() {
  return (
    <ButtonGroup outline>
      <Button>Profile</Button>
      <Button>Settings</Button>
      <Button>Messages</Button>
    </ButtonGroup>
  );
}
`;

export function Component() {
  return (
    <ButtonGroup outline>
      <Button>Profile</Button>
      <Button>Settings</Button>
      <Button>Messages</Button>
    </ButtonGroup>
  );
}

export const outline: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "buttonGroup/buttonGroup.outline.tsx",
  component: <Component />,
};
