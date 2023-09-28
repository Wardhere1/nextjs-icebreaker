import type { Meta, StoryObj } from "@storybook/react";

import SumButton from "./SumButton";

const meta = {
  title: "components/SumButton",
  component: SumButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: " #F09440" },
  },
} satisfies Meta<typeof SumButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Calculate",
    onClick: console.log("clicked me") as any,
    disabled: true,
    loading: false,
  },
};

export const AfterTextfiledsentry: Story = {
  args: {
    label: "Calculate",
    onClick: console.log("clicked me") as any,
    disabled: false,
    loading: false,
  },
};
