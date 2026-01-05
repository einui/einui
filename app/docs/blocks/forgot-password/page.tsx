"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CLIInstall } from "@/components/docs/cli-install";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import ForgotPasswordPageBlock from "@/registry/blocks/auth/forgot-password-page";

export default function ForgotPasswordPageDocPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <PageHeader
        title="Forgot Password Page"
        description="A forgot password recovery page block with email submission form and confirmation state, including helpful tips and support contact link."
      />

      <CLIInstall componentName="forgot-password-page" />
      <div className="flex justify-end">
        <OpenInV0Button component="forgot-password-page" />
      </div>

      {/* Preview */}
      <div className="my-8 border-2 border-white/10 rounded-2xl bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 shadow-2xl overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="relative p-5">
          <div className="max-h-150 overflow-y-auto">
            <ForgotPasswordPageBlock />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="my-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">Features</h2>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Email input with validation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Two-state form (submission form + confirmation screen)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Success confirmation screen with submitted email display</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Helpful tips for users who don&apos;t receive email</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Resend email option</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Support contact link</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Loading states with spinner animation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Back to sign in option</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Fully responsive design</span>
          </li>
        </ul>
      </div>

      {/* Components Used */}
      <div className="my-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">Components Used</h2>
        <ul className="space-y-2 text-white/70">
          <li>• GlassCard</li>
          <li>• GlassInput</li>
          <li>• GlassButton</li>
        </ul>
      </div>
    </div>
  );
}
