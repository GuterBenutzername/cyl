import type { Meta, StoryObj } from '@storybook/react';

import actionCard from '../dashboard/actionCard';

const meta: Meta<typeof actionCard> = {
    component: actionCard,
};

export default meta;
type Story = StoryObj<typeof actionCard>;

export const Default: Story = {
    args: {
        course: "Course",
        courseAvgA: 82.4,
        courseAvgB: 82.6,
        assignmentName: "Math test 2",
        assignmentGradeB: 75,
      }
}