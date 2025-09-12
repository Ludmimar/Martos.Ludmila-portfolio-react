import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectModal from '../ProjectModal';

const project = {
  id: '1',
  title: 'Test Project',
  description: 'Description',
  stack: 'TS, React',
  link: 'https://example.com',
  image: 'https://example.com/img.png',
};

describe('ProjectModal', () => {
  it('renders when project is provided', () => {
    render(<ProjectModal project={project} onClose={() => {}} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('calls onClose on ESC', async () => {
    const onClose = vi.fn();
    render(<ProjectModal project={project} onClose={onClose} />);
    await userEvent.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalled();
  });

  it('does not render when project is null', () => {
    const { container } = render(<ProjectModal project={null} onClose={() => {}} />);
    expect(container.firstChild).toBeNull();
  });
});



