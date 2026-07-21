"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CLIInstall } from "@/components/docs/cli-install";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { PricingBlockPage } from "@einui/registry";

export default function LoginPageDocPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <PageHeader
        title="Pricing Page"
        description="A complete pricing page block with multiple tiers, billing toggle, and feature comparison."
      />

      <CLIInstall componentName="pricing-page" />
      <div className="flex justify-end">
        <OpenInV0Button component="pricing-page" />
      </div>

      {/* Preview */}
      <div className="my-8 border-2 border-white/10 rounded-2xl bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 shadow-2xl overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="relative p-5">
          <div className="max-h-320 overflow-y-auto">
            <PricingBlockPage />
          </div>
        </div>
      </div>
    </div>
  );
}
