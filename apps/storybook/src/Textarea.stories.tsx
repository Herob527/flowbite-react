import type { Meta, StoryFn } from "@storybook/react";
import type { TextareaProps } from "@herob191/flowbite-react";
import { Textarea } from "@herob191/flowbite-react";

export default {
  title: "Components/Textarea",
  component: Textarea,
} as Meta;

const Template: StoryFn<TextareaProps> = (args) => <Textarea {...args} />;

export const DefaultTextarea = Template.bind({});
DefaultTextarea.storyName = "Textarea";
DefaultTextarea.args = {
  defaultValue: "Text",
  placeholder: "Write your thoughts here...",
};
