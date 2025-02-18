// app/page.js
"use client" // This is a client component

import { useState, useEffect } from "react"

import CreateEventLayout from "./CreateEvent/layout"

export default function Home() {
  const [isVerified, setIsVerified] = useState(false)
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [verifiedEmail, setVerifiedEmail] = useState(false)
  const [verifiedMobile, setVerifiedMobile] = useState(false)

  useEffect(() => {
    // Check local storage for verification status on mount
    const storedVerification = localStorage.getItem("isVerified")
    if (storedVerification === "true") {
      setIsVerified(true)
    }
  }, [])

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleMobileChange = (e) => setMobile(e.target.value)

  const handleEmailVerification = () => {
    // Simulate email verification (replace with actual logic)
    console.log("Verifying Email:", email)
    // In a real app, you would send a request to your backend
    // For this example, we'll just set verifiedEmail to true after a short delay
    setTimeout(() => {
      setVerifiedEmail(true)
      if (verifiedMobile) {
        localStorage.setItem("isVerified", "true")
        setIsVerified(true)
      }
    }, 1000) // Simulate 1-second delay
  }

  const handleMobileVerification = () => {
    // Simulate Mobile verification (replace with actual logic)
    console.log("Verifying Mobile:", mobile)
    // In a real app, you would send a request to your backend
    // For this example, we'll just set verifiedMobile to true after a short delay
    setTimeout(() => {
      setVerifiedMobile(true)
      if (verifiedEmail) {
        localStorage.setItem("isVerified", "true")
        setIsVerified(true)
      }
    }, 1000) // Simulate 1-second delay
  }

  if (!isVerified) {
    return (
      <div className="blurred-background">
        <div className="verification-container">
          <h2>Verification</h2>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            <button onClick={handleEmailVerification} disabled={verifiedEmail}>
              {verifiedEmail ? "Verified" : "Verify Email"}
            </button>
          </div>
          <div>
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={handleMobileChange}
            />
            <button
              onClick={handleMobileVerification}
              disabled={verifiedMobile}
            >
              {verifiedMobile ? "Verified" : "Verify Mobile"}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Your content for the next screen goes here */}
      <CreateEventLayout />
    </div>
  )
}
