import Logo from '@/components/logo'

export default function Header() {
  return (
    <div className="my-8 flex flex-col justify-center space-y-4">
      <Logo className="h-40" />
      <h1 className="text-center text-2xl font-bold uppercase">
        Medeniyet Tasavvuri Okulu Başvurusu
      </h1>
    </div>
  )
}
