import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="font-semibold">my-mpesa-app</Link>
        <div className="flex gap-4 text-sm">
          <Link className="hover:underline" to="/dashboard">Dashboard</Link>
          <Link className="hover:underline" to="/payment">Payment</Link>
        </div>
      </div>
    </nav>
  )
}

