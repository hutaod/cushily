import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@cushily/nextra/icons'
import { useMounted } from '@cushily/nextra/hooks'

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = useMounted()
  const isDark = resolvedTheme === 'dark'

  // @TODO: system theme
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <span
      role="button"
      aria-label="Toggle Dark Mode"
      className="nx-cursor-pointer nx-p-2 nx-text-current"
      tabIndex={0}
      onClick={toggleTheme}
      onKeyDown={e => {
        if (e.key === 'Enter') toggleTheme()
      }}
    >
      {mounted && isDark ? <MoonIcon /> : <SunIcon />}
    </span>
  )
}
