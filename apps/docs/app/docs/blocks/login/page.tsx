"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CLIInstall } from "@/components/docs/cli-install";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { LoginPageBlock } from "@einui/registry";

export default function LoginPageDocPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <PageHeader
        title="Login Page"
        description="A complete login page block with email and password authentication, password visibility toggle, remember me option, and social login buttons."
      />

      <CLIInstall componentName="login-page" />
      <div className="flex justify-end">
        <OpenInV0Button component="login-page" />
      </div>

      {/* Preview */}
      <div className="my-8 border-2 border-white/10 rounded-2xl bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 shadow-2xl overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="relative p-5">
          <div className="max-h-150 overflow-y-auto">
            <LoginPageBlock />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="my-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">Features</h2>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Email and password inputs with validation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Password visibility toggle button</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Remember me checkbox</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Social login buttons (Google, GitHub)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Loading states with spinner animation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Forgot password link</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 font-bold">•</span>
            <span>Sign up link for new users</span>
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
          <li>• GlassCheckbox</li>
        </ul>
      </div>
    </div>
  );
}
