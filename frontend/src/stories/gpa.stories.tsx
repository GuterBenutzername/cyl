import type { Meta, StoryObj } from '@storybook/react';

import GPA from '../dashboard/gpa';

const meta: Meta<typeof GPA> = {
    component: GPA,
};

export default meta;
type Story = StoryObj<typeof GPA>;

export const Default: Story = {
    args: {gpa: 3.9, goal: 4.0}
}