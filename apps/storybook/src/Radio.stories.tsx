import type { Meta, StoryFn } from "@storybook/react";
import type { RadioProps } from "@herob191/flowbite-react";
import { Radio } from "@herob191/flowbite-react";

export default {
  title: "Components/Radio",
  component: Radio,
} as Meta;

const Template: StoryFn<RadioProps> = (args) => <Radio {...args} />;

export const DefaultRadio = Template.bind({});
DefaultRadio.storyName = "Radio";
DefaultRadio.args = {};
