import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { VisuallyHidden as Component } from "./visually-hidden";

const Disclaimer = styled("div", {
  color: "$primary",
});

export default {
  title: "Visually Hidden",
  component: Component,
} as Meta<typeof Component>;

const Template: Story<typeof Component> = (args) => (
  <React.Fragment>
    <Disclaimer>
      This story is used to test the visually hidden component.
    </Disclaimer>
    <Component
      as="a"
      href="#hello-world"
      css={{
        color: "$cta",
      }}
      data-testid="skip-link"
      onClick={function onClickHandler(event: { preventDefault: () => void }) {
        event.preventDefault();
      }}
      {...args}
    >
      Hello, World!
    </Component>
  </React.Fragment>
);

export const VisuallyHidden = Template.bind({});

VisuallyHidden.args = {};

VisuallyHidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.tab();

  userEvent.click(canvas.getByTestId("skip-link"));
};
