import type { Meta, StoryObj } from '@storybook/react';
import OptimizedImage from './OptimizedImage';

const meta: Meta<typeof OptimizedImage> = {
  title: 'Components/OptimizedImage',
  component: OptimizedImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
    },
    priority: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300/ff7bac/ffffff?text=Sample+Image',
    alt: 'Sample image',
    width: 400,
    height: 300,
    loading: 'lazy',
    priority: false,
  },
};

export const Priority: Story = {
  args: {
    src: 'https://via.placeholder.com/200x200/ff7bac/ffffff?text=Priority',
    alt: 'Priority image',
    width: 200,
    height: 200,
    loading: 'eager',
    priority: true,
  },
};

export const Small: Story = {
  args: {
    src: 'https://via.placeholder.com/100x100/ff7bac/ffffff?text=Small',
    alt: 'Small image',
    width: 100,
    height: 100,
    loading: 'lazy',
    priority: false,
  },
};

export const WithSizes: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300/ff7bac/ffffff?text=Responsive',
    alt: 'Responsive image',
    width: 400,
    height: 300,
    loading: 'lazy',
    priority: false,
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
};

