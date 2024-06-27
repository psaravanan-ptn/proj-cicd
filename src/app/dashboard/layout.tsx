import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    template: '%s | DashboardLayout',
    default: 'DashboardLayout'
  }
}

export default function DashboardLayout({
    children, // will be a page or nested layout
    auth,
    team,
    analytics,
  }: {
    children: React.ReactNode,
    auth: React.ReactNode,
    team: React.ReactNode,
    analytics: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>
          <Link href="/dashboard/login">Loginnn</Link>
          <Link href="/dashboard/activities">Activities</Link>
          <Link href="/dashboard/reports">Reports</Link>
          <Link href="/dashboard/statistics">Statistics</Link>
        </nav>
        <div style={{border: "1px solid red"}}>
          {children}
          {auth}
          {team}
          {analytics}
        </div>
      </section>
    )
  }