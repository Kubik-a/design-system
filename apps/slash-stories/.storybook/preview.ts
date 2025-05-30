/* eslint-disable import/no-extraneous-dependencies */
import "@axa-fr/design-system-slash-css/dist/common/icons.scss";
import "@axa-fr/design-system-slash-css/dist/common/tokens.css";
import "@fontsource/source-sans-pro";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
