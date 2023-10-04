import * as React from "react";
import { Box as Component } from "./box";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Box",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component
    as="h1"
    css={{
      color: "$primary",
    }}
    {...args}
  >
    Hello, World!
  </Component>
);

export const Box = Template.bind({});

Box.args = {};

Box.parameters = {
  // Sets the diffThreshold for 0.2 for a specific story.
  chromatic: { diffThreshold: 0.2 },
};
