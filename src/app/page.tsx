import ApplicationForm from '@/components/application-form'
import Header from '@/components/layout/header'

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md rounded border bg-white shadow">
      <Header />
      <div className="h-1 w-full bg-primary" />
      <ApplicationForm />
    </div>
  )
}
