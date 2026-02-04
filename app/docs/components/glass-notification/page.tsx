import type { Metadata } from "next"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { GlassButton } from "@/registry/liquid-glass/glass-button"
import { GlassNotification } from "@/registry/innovative/glass-notification"
import { buildComponentMetadata, getComponentHeading, getComponentIntro } from "@/lib/seo"

const componentTitle = "Notifications"
const componentDescription =
  "Toast notifications with glass morphism styling, auto-dismiss progress bars, and multiple variants for success, error, warning, and info states."

export const metadata: Metadata = buildComponentMetadata({
  title: componentTitle,
  description: componentDescription,
  slug: "glass-notification",
})

const basicCode = `import { GlassNotification } from "@/components/glass-notification"

<GlassNotification
  type="success"
  title="Changes saved"
  description="Your profile has been updated."
/>`

const providerCode = `import { GlassNotificationProvider, useNotification } from "@/components/glass-notification"

// Wrap your app
<GlassNotificationProvider>
  <App />
</GlassNotificationProvider>

// Use in components
function Component() {
  const { addNotification } = useNotification()

  return (
    <button onClick={() => addNotification({
      type: "success",
      title: "Saved!",
      description: "Your changes have been saved."
    })}>
      Save
    </button>
  )
}`

export default function NotificationsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title={getComponentHeading(componentTitle)}
        description={getComponentIntro(componentTitle, componentDescription)}
      />

      <CLIInstall componentName="glass-notification" />

      <ComponentPreview
        title="Notification Types"
        description="Four notification variants for different states."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <GlassNotification type="success" title="Success!" description="Your changes have been saved." />
            <GlassNotification type="error" title="Error" description="Something went wrong. Please try again." />
            <GlassNotification type="warning" title="Warning" description="Your session is about to expire." />
            <GlassNotification type="info" title="Info" description="A new version is available." />
          </div>
        }
        code={basicCode}
      />

      <ComponentPreview
        title="Using the Provider"
        description="Wrap your app with GlassNotificationProvider to use the toast system."
        preview={
          <div className="flex flex-col items-center gap-4">
            <p className="text-white/60 text-sm text-center">
              Use the useNotification hook to trigger toasts from anywhere in your app.
            </p>
            <div className="flex gap-2">
              <GlassButton variant="primary" size="sm">
                Trigger Success
              </GlassButton>
              <GlassButton variant="destructive" size="sm">
                Trigger Error
              </GlassButton>
            </div>
          </div>
        }
        code={providerCode}
      />
    </div>
  )
}
