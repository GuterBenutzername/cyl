import type { Meta, StoryObj } from '@storybook/react';

import actionCard from '../dashboard/actionCard';

const meta: Meta<typeof actionCard> = {
    component: actionCard,
};

export default meta;
type Story = StoryObj<typeof actionCard>;

export const Default: Story = {
    args: {}
}