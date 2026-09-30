import { useState } from 'react'

/**
 * CTA
 * Contract: CTA(): JSX.Element
 *
 * Contact section for landing6.
 * - Two-column layout: headline left, functional form right
 * - Form validation, loading state, and success feedback
 */
function CTA() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setStatus('submitting')

    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 border border-[#F5F5F5]/10 p-8 md:grid-cols-2 md:p-16">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-[#00F0FF]">
              Start a project
            </span>
            <h2 className="max-w-md font-sans text-4xl font-bold leading-tight tracking-tight text-[#F5F5F5] md:text-5xl lg:text-6xl">
              Ready to build something luminous?
            </h2>
            <p className="mt-6 max-w-sm font-sans text-base leading-relaxed text-[#F5F5F5]/60">
              Tell us what you are making. We reply within two business days.
            </p>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col justify-center">
              <span className="mb-3 font-sans text-2xl font-semibold text-[#F5F5F5]">Message sent.</span>
              <p className="font-sans text-base text-[#F5F5F5]/60">
                Thank you for reaching out. We will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5]/60">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="border-b border-[#F5F5F5]/20 bg-transparent py-3 font-sans text-base text-[#F5F5F5] placeholder:text-[#F5F5F5]/30 focus:border-[#00F0FF] focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5]/60">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border-b border-[#F5F5F5]/20 bg-transparent py-3 font-sans text-base text-[#F5F5F5] placeholder:text-[#F5F5F5]/30 focus:border-[#00F0FF] focus:outline-none"
                  placeholder="you@company.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5]/60">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="border-b border-[#F5F5F5]/20 bg-transparent py-3 font-sans text-base text-[#F5F5F5] placeholder:text-[#F5F5F5]/30 focus:border-[#00F0FF] focus:outline-none"
                  placeholder="Tell us about your project"
                />
              </div>
              {error && <p className="font-sans text-sm text-red-400">{error}</p>}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-2 inline-flex items-center justify-center border border-[#00F0FF] bg-[#00F0FF]/10 px-8 py-4 font-mono text-sm uppercase tracking-widest text-[#00F0FF] transition-all duration-300 hover:bg-[#00F0FF] hover:text-[#0F0F0F] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default CTA
