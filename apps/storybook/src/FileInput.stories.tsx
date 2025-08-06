import type { Meta, StoryFn } from "@storybook/react";
import type { FileInputProps } from "@herob191/flowbite-react";
import { FileInput } from "@herob191/flowbite-react";

export default {
  title: "Components/FileInput",
  component: FileInput,
} as Meta;

const Template: StoryFn<FileInputProps> = (args) => <FileInput {...args} />;

export const DefaultFileInput = Template.bind({});
DefaultFileInput.storyName = "FileInput";
DefaultFileInput.args = {};
