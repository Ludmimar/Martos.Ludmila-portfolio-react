import type { Meta, StoryObj } from '@storybook/react';
import ProjectModal from './ProjectModal';

const meta: Meta<typeof ProjectModal> = {
  title: 'Components/ProjectModal',
  component: ProjectModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    project: {
      control: 'object',
    },
    onClose: {
      action: 'closed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProject = {
  id: '1',
  title: 'Sample Project',
  description: 'This is a sample project description that demonstrates how the modal looks with content.',
  stack: 'React · TypeScript · Tailwind CSS',
  link: 'https://github.com/example/sample-project',
  demo: 'https://sample-project-demo.netlify.app',
  image: 'https://via.placeholder.com/400x300/ff7bac/ffffff?text=Sample+Project'
};

export const Default: Story = {
  args: {
    project: sampleProject,
    onClose: () => console.log('Modal closed'),
  },
};

export const WithoutDemo: Story = {
  args: {
    project: {
      ...sampleProject,
      demo: undefined,
    },
    onClose: () => console.log('Modal closed'),
  },
};

export const Closed: Story = {
  args: {
    project: null,
    onClose: () => console.log('Modal closed'),
  },
};

