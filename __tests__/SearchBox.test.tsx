import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBox } from '@/components/molecules/SearchBox'

describe('SearchBox Component', () => {
  it('renders with default placeholder', () => {
    render(<SearchBox />)
    expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument()
  })

  it('renders with custom placeholder', () => {
    render(<SearchBox placeholder="Search something..." />)
    expect(screen.getByPlaceholderText('Search something...')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<SearchBox />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('handles input change', async () => {
    const handleChange = jest.fn()
    const user = userEvent.setup()
    
    render(<SearchBox onChange={handleChange} />)
    
    const input = screen.getByPlaceholderText('Buscar...')
    await user.type(input, 'test search')
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('handles search submission', async () => {
    const handleSearch = jest.fn()
    const user = userEvent.setup()
    
    render(<SearchBox onSearch={handleSearch} />)
    
    const input = screen.getByPlaceholderText('Buscar...')
    const searchButton = screen.getByRole('button', { name: /search/i })
    
    await user.type(input, 'test query')
    await user.click(searchButton)
    
    expect(handleSearch).toHaveBeenCalledWith('test query')
  })

  it('handles form submission with Enter key', async () => {
    const handleSearch = jest.fn()
    const user = userEvent.setup()
    
    render(<SearchBox onSearch={handleSearch} />)
    
    const input = screen.getByPlaceholderText('Buscar...')
    await user.type(input, 'test query')
    await user.keyboard('{Enter}')
    
    expect(handleSearch).toHaveBeenCalledWith('test query')
  })

  it('shows clear button when there is value', () => {
    render(<SearchBox value="test value" />)
    expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument()
  })

  it('handles clear action', async () => {
    const handleClear = jest.fn()
    const user = userEvent.setup()
    
    render(<SearchBox value="test value" onClear={handleClear} />)
    
    const clearButton = screen.getByRole('button', { name: /clear/i })
    await user.click(clearButton)
    
    expect(handleClear).toHaveBeenCalled()
  })

  it('disables search button when value is empty', () => {
    render(<SearchBox value="" />)
    const searchButton = screen.getByRole('button', { name: /search/i })
    expect(searchButton).toBeDisabled()
  })

  it('enables search button when value is not empty', () => {
    render(<SearchBox value="test" />)
    const searchButton = screen.getByRole('button', { name: /search/i })
    expect(searchButton).not.toBeDisabled()
  })

  it('applies custom className', () => {
    render(<SearchBox className="custom-class" />)
    const form = screen.getByRole('search')
    expect(form).toHaveClass('custom-class')
  })

  it('is disabled when disabled prop is true', () => {
    render(<SearchBox disabled />)
    const input = screen.getByPlaceholderText('Buscar...')
    const searchButton = screen.getByRole('button', { name: /search/i })
    
    expect(input).toBeDisabled()
    expect(searchButton).toBeDisabled()
  })
})