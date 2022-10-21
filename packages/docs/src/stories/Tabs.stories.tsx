import type { Meta, StoryObj } from "@storybook/react";

import { Box, Text, Tabs, TabsProps } from "@babylon-ui/react";

const tabs = [
  {
    name: "Account",
    _content: (
      <Box css={{ marginTop: "0.5rem" }}>
        <Text>Account</Text>
      </Box>
    ),
    get content() {
      return this._content;
    },
    set content(value) {
      this._content = value;
    },
  },
  {
    name: "List",
    content: (
      <Box css={{ marginTop: "0.5rem" }}>
        <Text>List</Text>
      </Box>
    ),
  },
  {
    name: "Password",
    content: (
      <Box css={{ marginTop: "0.5rem" }}>
        <Text>Password</Text>
      </Box>
    ),
  },
  {
    name: "Type",
    content: (
      <Box css={{ marginTop: "0.5rem" }}>
        <Text>Type</Text>
      </Box>
    ),
  },
];

export default {
  title: "Form/Tabs",
  component: Tabs,
  args: {
    tabs,
    defaultValue: "account",
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            padding: "$2",
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TabsProps>;

export const Primary: StoryObj<TabsProps> = {
  args: {
    defaultValue: "account",
  },
};
