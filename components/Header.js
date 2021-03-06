import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref>
          <a><h2>Evolve Blog</h2></a>
        </Link>
      </div>
    </header>
  )
}
