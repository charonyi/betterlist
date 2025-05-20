import Link from 'next/link'
 
function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/About/About">About Us</Link>
      </li>
      <li>
        <Link href="/PostAd/PostAdForm">PostAd</Link>
      </li>
    </ul>
  )
}
 
export default Home