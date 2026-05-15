import Navbar from '../components/Navbar.jsx'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="mt-3 text-gray-600">
          This is the frontend scaffold for my-mpesa-app.
        </p>
      </main>
    </div>
  )
}

