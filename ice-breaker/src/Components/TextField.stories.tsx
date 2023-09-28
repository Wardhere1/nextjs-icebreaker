import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";

const meta = {
  title: "components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    // backgroundColor: { control: " #F09440" },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "Number",
    value: 10,
    isValid: true,
  },
};
