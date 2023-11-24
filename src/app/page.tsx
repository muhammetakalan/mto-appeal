import ApplicationForm from '@/components/ApplicationForm'
import Header from '@/components/layout/Header'

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md rounded-lg border bg-card font-sans shadow">
      <Header />
      <div className="h-1 w-full bg-secondary" />
      <ApplicationForm />
    </div>
  )
}
