import Link from "next/link"
export default function Nav() {
  return (
    <nav><ul className="flex justify-between p-4 bg-green-700 text-white">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="signup">Sign up</Link></li>
    </ul>
    </nav>
  )
}
