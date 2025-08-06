import type { Meta, StoryFn } from "@storybook/react";
import type { RangeSliderProps } from "@herob191/flowbite-react";
import { RangeSlider, rangeSliderTheme } from "@herob191/flowbite-react";

export default {
  title: "Components/RangeSlider",
  component: RangeSlider,
  decorators: [
    (Story): JSX.Element => (
      <div className="flex w-1/2 flex-col">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    sizing: {
      options: Object.keys(rangeSliderTheme.field.input.sizes),
      control: { type: "select" },
    },
    disabled: {
      control: "boolean",
    },
  },
} as Meta;

const Template: StoryFn<RangeSliderProps> = (args) => <RangeSlider {...args} />;

export const DefaultRangeSlider = Template.bind({});
DefaultRangeSlider.storyName = "RangeSlider";
DefaultRangeSlider.args = {};
