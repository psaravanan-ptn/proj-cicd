import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | TODOLayout',
    default: 'TODOLayout'
  }
}

export default function TodosLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>Todos /</nav>
        <nav>Todo Item </nav>
   
        {children}
      </section>
    )
  }