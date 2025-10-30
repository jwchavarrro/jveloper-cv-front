import { render, screen } from '@testing-library/react'
import { LayoutPage } from '@/components/atomic-desing/template'

describe('LayoutPage (template)', () => {
  it('renderiza header, main y footer', () => {
    render(
      <LayoutPage
        header={<div>H</div>}
        main={<div>M</div>}
        footer={<div>F</div>}
      />
    )
    expect(screen.getByText('H')).toBeInTheDocument()
    expect(screen.getByText('M')).toBeInTheDocument()
    expect(screen.getByText('F')).toBeInTheDocument()
  })
})
