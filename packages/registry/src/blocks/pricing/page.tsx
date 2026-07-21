"use client";

import { useState } from "react";
import { Check, Sparkles, Zap, Building2, ArrowRight } from "lucide-react";
import {
  GlassCard,
  GlassCardContent,
  GlassCardDescription,
  GlassCardHeader,
  GlassCardTitle,
} from "../../liquid-glass/glass-card";
import { GlassButton } from "../../liquid-glass/glass-button";
import { GlassBadge } from "../../liquid-glass/glass-badge";
import { GlassSwitch } from "../../liquid-glass/glass-switch";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: { monthly: 29, yearly: 24 },
    description: "Perfect for individuals and small projects",
    badge: null,
    features: ["Up to 5 projects", "2GB storage", "Basic analytics", "Single user"],
    cta: "Get Started",
    highlighted: false,
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    name: "Professional",
    icon: Sparkles,
    price: { monthly: 79, yearly: 66 },
    description: "Best for growing teams and businesses",
    badge: "Most Popular",
    features: [
      "Unlimited projects",
      "50GB storage",
      "Advanced analytics",
      "Up to 10 team members",
      "Custom domain",
      "API access",
      "Integrations",
    ],
    cta: "Subscribe Now",
    highlighted: true,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: { monthly: null, yearly: null },
    description: "For large organizations with custom needs",
    badge: "Custom",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "24/7 phone support",
      "On-premise deployment",
      "Security compliance",
    ],
    cta: "Contact Sales",
    highlighted: false,
    gradient: "from-orange-400 to-red-500",
  },
];

export default function PricingBlockPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-full py-4 flex items-center justify-center bg-linear-to-br from-slate-950 via-purple-900 to-slate-950 px-3">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <GlassBadge variant="default" className="mb-2">
            <Sparkles className="size-3 mr-1" /> Simple Pricing
          </GlassBadge>
          <h1 className="text-3xl lg:text-4xl font-bold text-white">Choose Your Perfect Plan</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Start free and scale as you grow. All plans include core features with no hidden fees.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4">
          <span
            className={`text-sm transition-colors ${!isYearly ? "text-white" : "text-white/50"}`}
          >
            Monthly
          </span>
          <GlassSwitch checked={isYearly} onCheckedChange={setIsYearly} />
          <span
            className={`text-sm transition-colors ${isYearly ? "text-white" : "text-white/50"}`}
          >
            Yearly
            <GlassBadge variant="success" className="ml-2 text-xs">
              Save 20%
            </GlassBadge>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = isYearly ? plan.price.yearly : plan.price.monthly;

            return (
              <div key={plan.name} className={`relative ${plan.highlighted ? "md:-mt-4 md:mb-4" : ""}`}>
                {plan.highlighted && (
                  <div className="absolute w-full -top-3 left-3/4 -translate-x-1/2 z-10">
                    <GlassBadge variant="success" className="shadow-lg shadow-green-500/20">
                      <Sparkles className="size-3 mr-1" /> {plan.badge}
                    </GlassBadge>
                  </div>
                )}
                <GlassCard
                  className={`h-full transition-all duration-300 hover:scale-[1.02] ${
                    plan.highlighted ? "ring-2 ring-cyan-400/50 shadow-xl shadow-cyan-500/10" : ""
                  }`}
                >
                  <GlassCardHeader className="text-center pb-2">
                    <div
                      className={`mx-auto p-3 rounded-xl bg-linear-to-br ${plan.gradient} w-fit mb-3`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <GlassCardTitle className="text-xl">{plan.name}</GlassCardTitle>
                    <GlassCardDescription>{plan.description}</GlassCardDescription>
                  </GlassCardHeader>
                  <GlassCardContent className="space-y-6">
                    {/* Price */}
                    <div className="text-center py-4 border-y border-white/10">
                      {price !== null ? (
                        <>
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-4xl font-bold text-white">${price}</span>
                            <span className="text-white/60">/month</span>
                          </div>
                          {isYearly && (
                            <p className="text-xs text-white/50 mt-1">
                              Billed ${price * 12} annually
                            </p>
                          )}
                        </>
                      ) : (
                        <p className="text-2xl font-bold text-white">Custom Pricing</p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="p-0.5 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 shrink-0 mt-0.5">
                            <Check className="size-3 text-white" />
                          </div>
                          <span className="text-sm text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <GlassButton
                      variant={plan.highlighted ? "primary" : "outline"}
                      className="w-full justify-center py-5 group"
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </GlassButton>
                  </GlassCardContent>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
