import { Avatar } from "@herob191/flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
import { Avatar } from "@herob191/flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar placeholderInitials="RR" />
      <Avatar placeholderInitials="RR" rounded />
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar placeholderInitials="RR" />
      <Avatar placeholderInitials="RR" rounded />
    </div>
  );
}

export const placeholderInitials: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "avatar/avatar.placeholderInitials.tsx",
  component: <Component />,
};
