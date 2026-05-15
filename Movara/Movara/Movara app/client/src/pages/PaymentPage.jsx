import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'

export default function PaymentPage() {
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState('')

  async function handlePay() {
    setMessage('Processing...')

    try {
      const res = await fetch('/api/mpesa/stk-push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Number(amount) })
      })

      const data = await res.json().catch(() => null)
      setMessage(res.ok ? `Success: ${JSON.stringify(data)}` : `Failed: ${JSON.stringify(data)}`)
    } catch (e) {
      setMessage(`Error: ${e.message}`)
    }
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">Make a Payment</h2>
        <div className="mt-6 max-w-md">
          <label className="block text-sm font-medium">Amount</label>
          <input
            className="mt-2 w-full border rounded-md px-3 py-2"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 100"
          />
          <div className="mt-4">
            <Button onClick={handlePay}>STK Push</Button>
          </div>
          {message ? <p className="mt-4 text-sm text-gray-600">{message}</p> : null}
        </div>
      </main>
    </div>
  )
}

