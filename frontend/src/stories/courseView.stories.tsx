import type { Meta, StoryObj } from '@storybook/react';

import CourseView from '../dashboard/courseView';

const meta: Meta<typeof CourseView> = {
    component: CourseView,
};

export default meta;
type Story = StoryObj<typeof CourseView>;

export const Default: Story = {
    args: {name: "Math", grade: 82.4}
}