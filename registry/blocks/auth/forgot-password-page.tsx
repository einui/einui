"use client"

import { useState } from "react"
import { Mail, ArrowLeft, Send } from "lucide-react"
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from "@/registry/liquid-glass/glass-card"
import { GlassInput } from "@/registry/liquid-glass/glass-input"
import { GlassButton } from "@/registry/liquid-glass/glass-button"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPageBlock() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleBack = () => {
    setIsSubmitted(false)
    setEmail("")
  }

  return (
    <div className="h-full flex py-14 items-center justify-center bg-linear-to-br from-slate-950 via-purple-900 to-slate-950 px-4">
      <GlassCard className="w-full max-w-md">
        {!isSubmitted ? (
          <>
            <GlassCardHeader className="space-y-2 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-linear-to-br from-orange-400 to-red-500">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <GlassCardTitle className="text-2xl">Forgot Password?</GlassCardTitle>
              <GlassCardDescription>
                No problem! Enter your email and we&apos;ll send you a link to reset your password.
              </GlassCardDescription>
            </GlassCardHeader>

            <GlassCardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80">
                    Email Address
                  </Label>
                  <GlassInput
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/5"
                  />
                  <p className="text-xs text-white/50 mt-1">
                    We&apos;ll send a password reset link to this email address.
                  </p>
                </div>

                {/* Submit Button */}
                <GlassButton type="submit" variant="primary" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Reset Link
                    </>
                  )}
                </GlassButton>

                {/* Back to Login */}
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-full flex items-center justify-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Sign In
                </button>
              </form>
            </GlassCardContent>
          </>
        ) : (
          <>
            <GlassCardHeader className="space-y-2 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-linear-to-br from-green-400 to-emerald-500">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <GlassCardTitle className="text-2xl">Check Your Email</GlassCardTitle>
              <GlassCardDescription>
                We&apos;ve sent a password reset link to{" "}
                <span className="font-medium text-white/90">{email}</span>
              </GlassCardDescription>
            </GlassCardHeader>

            <GlassCardContent className="space-y-6">
              {/* Success Message */}
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-sm text-green-400">
                  Please check your email and follow the instructions to reset your password. The link expires in 24 hours.
                </p>
              </div>

              {/* Helpful Tips */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-white/80">Didn&apos;t receive the email?</h3>
                <ul className="space-y-2 text-xs text-white/60">
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Check your spam or junk folder</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Make sure you entered the correct email address</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Try using a different email address if you have one on file</span>
                  </li>
                </ul>
              </div>

              {/* Resend Option */}
              <div className="flex gap-2">
                <GlassButton
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={handleBack}
                >
                  Try Different Email
                </GlassButton>
                <GlassButton
                  type="button"
                  variant="primary"
                  className="flex-1"
                  disabled={isLoading}
                  onClick={handleSubmit}
                >
                  {isLoading ? (
                    <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    "Resend Email"
                  )}
                </GlassButton>
              </div>

              {/* Contact Support */}
              <p className="text-center text-xs text-white/50 pt-4 border-t border-white/10">
                Still need help?{" "}
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Contact support
                </a>
              </p>
            </GlassCardContent>
          </>
        )}
      </GlassCard>
    </div>
  )
}
