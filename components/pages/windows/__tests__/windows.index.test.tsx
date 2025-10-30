import { PAGE_WINDOWS } from '@/components/pages/windows/utils/constants'

describe('components/pages/windows constants', () => {
  it('define icons de escritorio por defecto', () => {
    expect(PAGE_WINDOWS.FRAGMENTS.DESKTOP.ICONS.length).toBeGreaterThan(0)
  })

  it('define apps en taskbar', () => {
    expect(Array.isArray(PAGE_WINDOWS.FRAGMENTS.TASKBAR.APPS)).toBe(true)
  })
})


