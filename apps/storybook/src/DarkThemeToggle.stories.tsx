import type { Meta, StoryFn } from "@storybook/react";
import { DarkThemeToggle, ThemeProvider } from "@herob191/flowbite-react";

export default {
  title: "Components/DarkThemeToggle",
  component: DarkThemeToggle,
} as Meta;

const Template: StoryFn = (args) => (
  <ThemeProvider>
    <DarkThemeToggle {...args} />
  </ThemeProvider>
);

export const DefaultDarkThemeToggle = Template.bind({});
DefaultDarkThemeToggle.storyName = "Default";
DefaultDarkThemeToggle.args = {};
