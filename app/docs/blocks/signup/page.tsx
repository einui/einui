"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CLIInstall } from "@/components/docs/cli-install";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import SignupPageBlock from "@/registry/blocks/auth/signup-page";

export default function SignupPageDocPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <PageHeader
        title="Sign Up Page"
        description="A complete sign up page block with multi-step validation, real-time password strength indicator, password confirmation matching, and terms agreement checkbox."
      />

      <CLIInstall componentName="signup-page" />
      <div className="flex justify-end">
        <OpenInV0Button component="signup-page" />
      </div>

      {/* Preview */}
      <div className="my-8 border-2 border-white/10 rounded-2xl bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 shadow-2xl overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="relative p-5">
          <div className="max-h-200 overflow-y-auto">
            <SignupPageBlock />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="my-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">Features</h2>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Multi-field form (first name, last name, email)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Real-time password strength validation with 5 rules</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Password confirmation with visual matching feedback</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>
              Visual indicators for validation rules (minimum length, uppercase, lowercase, number,
              special character)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Terms of service and privacy policy agreement checkbox</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Smart submit button (disabled until all requirements met)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Loading states with spinner animation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Sign in link for existing users</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Fully responsive design</span>
          </li>
        </ul>
      </div>

      {/* Password Validation Rules */}
      <div className="my-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">Password Validation Rules</h2>
        <ul className="space-y-2 text-white/70">
          <li>• Minimum 8 characters</li>
          <li>• At least one uppercase letter (A-Z)</li>
          <li>• At least one lowercase letter (a-z)</li>
          <li>• At least one number (0-9)</li>
          <li>• At least one special character (!@#$%^&amp;*(),.?&quot;:{}|&lt;&gt;)</li>
        </ul>
      </div>

      {/* Components Used */}
      <div className="my-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">Components Used</h2>
        <ul className="space-y-2 text-white/70">
          <li>• GlassCard</li>
          <li>• GlassInput</li>
          <li>• GlassButton</li>
          <li>• GlassCheckbox</li>
        </ul>
      </div>
    </div>
  );
}
