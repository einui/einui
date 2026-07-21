import { render, screen, fireEvent } from '@testing-library/react'
import { GlassButton } from '../src/liquid-glass/glass-button'
import { Icon } from 'lucide-react'

describe('GlassButton', () => {
  it('renders with text', () => {
    render(<GlassButton>Click me</GlassButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<GlassButton onClick={handleClick}>Click</GlassButton>)

    fireEvent.click(screen.getByText('Click'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies custom class names', () => {
    render(<GlassButton className="custom-class">Test</GlassButton>)
    expect(screen.getByText('Test').parentElement).toHaveClass('custom-class')
  })

  describe('variants', () => {
    it('renders default variant', () => {
      render(<GlassButton variant="default">Default</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-white/20')
    })

    it('renders primary variant', () => {
      render(<GlassButton variant="primary">Primary</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('from-cyan-500/80')
    })

    it('renders outline variant', () => {
      render(<GlassButton variant="outline">Outline</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-transparent', 'border-2')
    })

    it('renders ghost variant', () => {
      render(<GlassButton variant="ghost">Ghost</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-transparent')
    })

    it('renders destructive variant', () => {
      render(<GlassButton variant="destructive">Destructive</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-red-500/30')
    })
  })

  describe('sizes', () => {
    it('renders default size', () => {
      render(<GlassButton size="default">Default Size</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-10', 'px-4')
    })

    it('renders small size', () => {
      render(<GlassButton size="sm">Small</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-8', 'px-3', 'text-xs')
    })

    it('renders large size', () => {
      render(<GlassButton size="lg">Large</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-12', 'px-6', 'text-base')
    })

    it('renders icon size', () => {
      render(<GlassButton size="icon">→</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-10', 'w-10')
    })
  })

  describe('glow effect', () => {
    it('renders without glow effect by default', () => {
      const { container } = render(<GlassButton>No Glow</GlassButton>)
      const glowDiv = container.querySelector('.blur-lg')
      expect(glowDiv).not.toBeInTheDocument()
    })

    it('renders with glow effect when enabled', () => {
      const { container } = render(<GlassButton glowEffect>With Glow</GlassButton>)
      const glowDiv = container.querySelector('.blur-lg')
      expect(glowDiv).toBeInTheDocument()
      expect(glowDiv).toHaveClass('from-cyan-500/40', 'via-blue-500/40', 'to-purple-500/40')
    })
  })

  describe('disabled state', () => {
    it('does not trigger click when disabled', () => {
      const handleClick = vi.fn()
      render(<GlassButton disabled onClick={handleClick}>Disabled</GlassButton>)

      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('applies disabled styles', () => {
      render(<GlassButton disabled>Disabled</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50')
      expect(button).toBeDisabled()
    })
  })

  describe('asChild prop', () => {
    it('renders as child component when asChild is true', () => {
      render(
        <GlassButton asChild>
          <a href="/test">Link Button</a>
        </GlassButton>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/test')
      expect(link).toHaveTextContent('Link Button')
    })

    it('renders as button when asChild is false', () => {
      render(<GlassButton asChild={false}>Regular Button</GlassButton>)
      const button = screen.getByRole('button')
      expect(button.tagName).toBe('BUTTON')
    })
  })

  describe('accessibility', () => {

    it('applies focus-visible styles', () => {
      render(<GlassButton>Focus Test</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus-visible:outline-none', 'focus-visible:ring-2')
    })

    it('passes through aria attributes', () => {
      render(
        <GlassButton aria-label="Custom label" aria-describedby="description">
          Button
        </GlassButton>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-label', 'Custom label')
      expect(button).toHaveAttribute('aria-describedby', 'description')
    })
  })

  describe('icon support', () => {
    it('renders with icon children', () => {
      render(
        <GlassButton>
          <svg data-testid="test-icon" />
          <span>With Icon</span>
        </GlassButton>
      )
      expect(screen.getByTestId('test-icon')).toBeInTheDocument()
      expect(screen.getByText('With Icon')).toBeInTheDocument()
    })

    it('renders lucide icon without forcing size', () => {
      const { container } = render(
        <GlassButton>
          <Icon iconNode={[]} />
          Text
        </GlassButton>
      )
      const svg = container.querySelector('svg')
      expect(svg).toHaveClass('lucide')
    })

    it('renders raw svg icon', () => {
      const { container } = render(
        <GlassButton>
          <svg data-testid="raw-icon" />
          Text
        </GlassButton>
      )
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('interaction states', () => {
    it('applies hover scale transformation', () => {
      render(<GlassButton>Hover Me</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('hover:scale-105')
    })

    it('applies active scale transformation', () => {
      render(<GlassButton>Press Me</GlassButton>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('active:scale-95')
    })
  })

  describe('ref forwarding', () => {
    it('forwards ref to button element', () => {
      const ref = vi.fn()
      render(<GlassButton ref={ref}>Ref Test</GlassButton>)
      expect(ref).toHaveBeenCalled()
    })
  })

  describe('HTML attributes', () => {
    it('passes through button props', () => {
      render(
        <GlassButton type="submit" name="submit-button" value="submit">
          Submit
        </GlassButton>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'submit')
      expect(button).toHaveAttribute('name', 'submit-button')
      expect(button).toHaveAttribute('value', 'submit')
    })
  })
})