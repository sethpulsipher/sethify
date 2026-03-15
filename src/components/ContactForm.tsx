'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic (API endpoint, email service, etc.)
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="bg-white p-12 text-center" style={{ borderRadius: '2px' }}>
        <div className="w-16 h-16 bg-sage/10 flex items-center justify-center mx-auto mb-6" style={{ borderRadius: '2px' }}>
          <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl mb-4">Thanks for reaching out</h2>
        <p className="text-lg text-stone mb-8 max-w-md mx-auto">
          We&apos;ve received your message and will respond within 2 hours during business hours (8am-6pm MT, Monday-Friday).
        </p>
        <p className="text-stone">
          In the meantime, check out our{' '}
          <Link href="/results" className="text-coral hover:underline">
            case studies
          </Link>{' '}
          to see how we&apos;ve helped businesses like yours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
          Name <span className="text-coral">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full"
          placeholder="John Smith"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
            Email <span className="text-coral">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full"
            placeholder="(385) 993-5483"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">
            Company Name <span className="text-coral">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full"
            placeholder="Smith HVAC Services"
          />
        </div>

        {/* SERVICE */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-ink mb-2">
            What do you need help with? <span className="text-coral">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full"
          >
            <option value="">Select service</option>
            <option value="new-webstie">A new website</option>
            <option value="website-redesign">Website redesign</option>
            <option value="new-shopify-store">A new Shopify store</option>
            <option value="ai-phone-system">AI phone system</option>
            <option value="ai-chatbot">AI chatbot</option>
            <option value="automation">Workflow automation</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
          Leave a message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full resize-none"
          placeholder="Feel free to leave a message... or don't, we know sometimes it's easier to just hit submit and talk to someone :)"
        />
      </div>

      <div className="bg-cream-dark p-4" style={{ borderRadius: '2px' }}>
        <p className="text-sm text-stone">
          By submitting this form, you agree to receive communications about our services. We typically respond within 2 hours during business hours.
        </p>
      </div>

      <button type="submit" className="btn-primary w-full text-lg">
        <span>Book Free Consultation</span>
      </button>
    </form>
  )
}
