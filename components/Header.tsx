import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
//<Logo />
//import Logo from '@/data/Frostbyte-logo.png'
//import logoSrc from '../public/static/images/Frostbyte-logo.png'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  //let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  let headerClass =
    'flex items-center w-full bg-[#6e9acc] justify-between py-10 px-[10vw] [&_a:hover]:text-white dark:[&_a:hover]:text-gray-950 [&_button:hover]:text-white dark:[&_button:hover]:text-gray-950'
  headerClass += ' [&_svg:hover]:text-white dark:[&_svg:hover]:text-gray-950'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <img src={siteMetadata.siteLogo} alt="Logo" className="h-14 w-17" />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto md:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

//<div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
