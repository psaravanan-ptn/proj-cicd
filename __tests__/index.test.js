import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    // const heading = screen.getByRole('Learn about Next.js', { level: 1 })
 
    // expect(heading).toBeInTheDocument()
    const welcomeText = screen.getByText(/Learn about Next.js/i)
    expect(welcomeText).toBeInTheDocument();
  })
})