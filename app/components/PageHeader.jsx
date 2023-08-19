import Link from 'next/link'
import styles from './PageHeader.module.css'

const links = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
},
{
  label: 'Contact',
  route: '/contact'
}
]

function PageHeader () {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul>
          {links.map(({ route, label }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default PageHeader
