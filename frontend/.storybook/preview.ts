import type { Preview } from "@storybook/react";
import "../src/sanitizecss/sanitize.css";
import "../src/sanitizecss/assets.css";
import "../src/sanitizecss/forms.css";
import "../src/sanitizecss/typography.css";
import "../src/index.css";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
