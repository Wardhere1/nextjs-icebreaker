import type { Meta, StoryObj } from "@storybook/react";
import Navbar, { NavbarProps } from "./Navbar";
import { useState } from "react";
// import Logo from "/ice-breaker/public/easyjet-logo.png";
const meta: Meta<typeof Navbar> = {
  title: "components/Navbar",
  parameters: {
    layout: "Center",
  },
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// export const primary: Story<NavbarProps> = () => {
//   const [toggle, setToggle] = useState<boolean>(false);
//   return <Navbar toggle={toggle} setToggle={setToggle} />;
// };

export const Default: Story = {
  args: {
    toggle: true,
    setToggle: false,
  },
};

// const logo = {
//   src: Logo,
//   alt: "my image",
// };
// export const withLogo: Story = {
//   render: () => <img />,
// };
