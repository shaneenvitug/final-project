import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/activity">
      <a>Activity</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
)

export default Nav;