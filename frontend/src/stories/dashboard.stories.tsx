import type { Meta, StoryObj } from "@storybook/react";

import Dashboard from "../dashboard/dashboard";

const meta: Meta<typeof Dashboard> = {
  component: Dashboard,
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

export const Premium: Story = {
  args: {
    premium: true,
    actions: [
      {
        course: "Course",
        courseAvgA: 82.4,
        courseAvgB: 82.6,
        assignmentName: "Math test 2",
        assignmentGradeB: 75,
      },
    ],
    courses: [
        {
            name: "Math",
            grade: 82.4
        }
    ]
  },
};
