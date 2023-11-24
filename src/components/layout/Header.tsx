import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  return (
    <div className="my-8 flex flex-col items-center justify-center space-y-4">
      <Logo className="h-40" />
      <ThemeSwitcher />
      <h1 className="text-center text-2xl font-bold uppercase">
        Medeniyet Tasavvuru Okulu Başvurusu
      </h1>
    </div>
  )
}
