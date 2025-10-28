import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Card } from '@/components/molecules/Card'

describe('Card Component', () => {
  it('renders with children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('renders with title', () => {
    render(<Card title="Card Title">Card content</Card>)
    expect(screen.getByText('Card Title')).toBeInTheDocument()
  })

  it('renders with subtitle', () => {
    render(<Card subtitle="Card Subtitle">Card content</Card>)
    expect(screen.getByText('Card Subtitle')).toBeInTheDocument()
  })

  it('renders with both title and subtitle', () => {
    render(
      <Card title="Card Title" subtitle="Card Subtitle">
        Card content
      </Card>
    )
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card Subtitle')).toBeInTheDocument()
  })

  it('applies default variant styles', () => {
    render(<Card>Default Card</Card>)
    const card = screen.getByText('Default Card').closest('div')
    expect(card).toHaveClass('rounded-lg')
  })

  it('applies elevated variant styles', () => {
    render(<Card variant="elevated">Elevated Card</Card>)
    const card = screen.getByText('Elevated Card').closest('div')
    expect(card).toHaveClass('shadow-md')
  })

  it('applies outlined variant styles', () => {
    render(<Card variant="outlined">Outlined Card</Card>)
    const card = screen.getByText('Outlined Card').closest('div')
    expect(card).toHaveClass('border-2')
  })

  it('applies filled variant styles', () => {
    render(<Card variant="filled">Filled Card</Card>)
    const card = screen.getByText('Filled Card').closest('div')
    expect(card).toHaveClass('bg-muted/50')
  })

  it('applies padding classes correctly', () => {
    render(<Card padding="lg">Large Padding Card</Card>)
    const card = screen.getByText('Large Padding Card').closest('div')
    expect(card).toHaveClass('p-8')
  })

  it('handles click events when onClick is provided', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    
    render(<Card onClick={handleClick}>Clickable Card</Card>)
    
    const card = screen.getByText('Clickable Card').closest('div')
    await user.click(card!)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies hover styles when hover prop is true', () => {
    render(<Card hover>Hover Card</Card>)
    const card = screen.getByText('Hover Card').closest('div')
    expect(card).toHaveClass('hover:shadow-lg')
  })

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom Card</Card>)
    const card = screen.getByText('Custom Card').closest('div')
    expect(card).toHaveClass('custom-class')
  })

  it('uses shadcn structure when useShadcnStructure is true', () => {
    render(
      <Card useShadcnStructure title="Shadcn Card">
        Shadcn content
      </Card>
    )
    expect(screen.getByText('Shadcn Card')).toBeInTheDocument()
    expect(screen.getByText('Shadcn content')).toBeInTheDocument()
  })

  it('renders without title and subtitle when not provided', () => {
    render(<Card>Simple Card</Card>)
    expect(screen.getByText('Simple Card')).toBeInTheDocument()
    expect(screen.queryByText('Card Title')).not.toBeInTheDocument()
  })
})
