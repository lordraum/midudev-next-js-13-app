import Link from 'next/link'

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
    <header>
      <nav>
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
