import React from 'react'

export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-chronoAccent mb-4">Contact</h1>
      <p className="text-lg">
        For support, partnership, or questions about ChronoVerse, email us at{' '}
        <a
          href="mailto:support@chronoverse.com"
          className="underline text-chronoBlue"
        >
          support@chronoverse.com
        </a>
        .<br />
        <br />
        For investment, media, or business inquiries, please contact our founder
        directly.
        <br />
        <b>ChronoVerse Labs</b>
        <br />
        1234 Metaverse Way, Suite 1<br />
        Future City, CA 90000
        <br />
        <br />
        We look forward to hearing from you!
      </p>
    </div>
  )
}
