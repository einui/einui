"use client"

import * as React from "react"
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

type NotificationType = "success" | "error" | "warning" | "info"
type NotificationPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"

interface Notification {
  id: string
  type: NotificationType
  title: string
  description?: string
  duration?: number
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, "id">) => void
  removeNotification: (id: string) => void
}

const NotificationContext = React.createContext<NotificationContextType | null>(null)

export function useNotification() {
  const context = React.useContext(NotificationContext)
  if (!context) {
    throw new Error("useNotification must be used within a GlassNotificationProvider")
  }
  return context
}

export function GlassNotificationProvider({
  children,
  position = "bottom-right",
}: {
  children: React.ReactNode
  position?: NotificationPosition
}) {
  const [notifications, setNotifications] = React.useState<Notification[]>([])

  const addNotification = React.useCallback((notification: Omit<Notification, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    setNotifications((prev) => [...prev, { ...notification, id }])

    if (notification.duration !== 0) {
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id))
      }, notification.duration || 5000)
    }
  }, [])

  const removeNotification = React.useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }, [])

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
      <GlassNotificationContainer position={position} />
    </NotificationContext.Provider>
  )
}

const typeConfig = {
  success: {
    icon: CheckCircle,
    gradient: "from-emerald-500/30 to-green-500/30",
    border: "border-emerald-400/30",
    iconColor: "text-emerald-400",
  },
  error: {
    icon: AlertCircle,
    gradient: "from-red-500/30 to-rose-500/30",
    border: "border-red-400/30",
    iconColor: "text-red-400",
  },
  warning: {
    icon: AlertTriangle,
    gradient: "from-amber-500/30 to-yellow-500/30",
    border: "border-amber-400/30",
    iconColor: "text-amber-400",
  },
  info: {
    icon: Info,
    gradient: "from-cyan-500/30 to-blue-500/30",
    border: "border-cyan-400/30",
    iconColor: "text-cyan-400",
  },
}

const positionStyles: Record<NotificationPosition, { container: string; animation: string }> = {
  "top-right": {
    container: "top-4 right-4",
    animation: "slide-in-from-right-full",
  },
  "top-left": {
    container: "top-4 left-4",
    animation: "slide-in-from-left-full",
  },
  "bottom-right": {
    container: "bottom-4 right-4",
    animation: "slide-in-from-right-full",
  },
  "bottom-left": {
    container: "bottom-4 left-4",
    animation: "slide-in-from-left-full",
  },
  "top-center": {
    container: "top-4 left-1/2 -translate-x-1/2",
    animation: "slide-in-from-top-full",
  },
  "bottom-center": {
    container: "bottom-4 left-1/2 -translate-x-1/2",
    animation: "slide-in-from-bottom-full",
  },
}

function GlassNotificationContainer({ position = "bottom-right" }: { position?: NotificationPosition }) {
  const { notifications, removeNotification } = useNotification()
  const positionConfig = positionStyles[position]

  return (
    <div
      className={cn("fixed z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none", positionConfig.container)}
      role="region"
      aria-label="Notifications"
    >
      {notifications.map((notification, index) => (
        <GlassNotificationItem
          key={notification.id}
          notification={notification}
          onClose={() => removeNotification(notification.id)}
          animationClass={positionConfig.animation}
          style={{
            transform: `scale(${1 - index * 0.02})`,
            opacity: 1 - index * 0.1,
          }}
        />
      ))}
    </div>
  )
}

interface GlassNotificationItemProps {
  notification: Notification
  onClose: () => void
  style?: React.CSSProperties
  animationClass?: string
}

function GlassNotificationItem({
  notification,
  onClose,
  style,
  animationClass = "slide-in-from-right-full",
}: GlassNotificationItemProps) {
  const config = typeConfig[notification.type]
  const Icon = config.icon
  const [progress, setProgress] = React.useState(100)
  const duration = notification.duration || 5000

  React.useEffect(() => {
    if (duration === 0) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - 100 / (duration / 100)
        return newProgress <= 0 ? 0 : newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [duration])

  return (
    <div
      className={cn("pointer-events-auto animate-in fade-in duration-300", animationClass)}
      style={style}
      role="alert"
    >
      <div className="relative">
        <div className={cn("absolute -inset-1.5 rounded-xl bg-linear-to-r blur-xl opacity-60", config.gradient)} />

        {/* Main container with enhanced glass */}
        <div
          className={cn(
            "relative rounded-xl border",
            "bg-white/10 backdrop-blur-2xl",
            "shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)]",
            "overflow-hidden",
            config.border,
          )}
        >
          {/* Glass highlight layers */}
          <div className="absolute inset-0 rounded-xl bg-linear-to-b from-white/15 to-transparent pointer-events-none" />
          <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-transparent to-white/10 pointer-events-none" />

          <div className="relative p-4 flex items-start gap-3">
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-lg shrink-0",
                "border border-white/10",
                `bg-linear-to-br ${config.gradient}`,
              )}
            >
              <Icon className={cn("w-5 h-5", config.iconColor)} aria-hidden="true" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-white">{notification.title}</h4>
              {notification.description && <p className="mt-1 text-sm text-white/60">{notification.description}</p>}
            </div>

            <button
              onClick={onClose}
              aria-label="Dismiss notification"
              className="shrink-0 p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress bar */}
          {duration !== 0 && (
            <div className="h-1 bg-white/5">
              <div
                className={cn("h-full transition-all duration-100 ease-linear", `bg-linear-to-r ${config.gradient}`)}
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Standalone notification component for demos
export function GlassNotification({
  type = "info",
  title,
  description,
  className,
}: {
  type?: NotificationType
  title: string
  description?: string
  className?: string
}) {
  const config = typeConfig[type]
  const Icon = config.icon

  return (
    <div className={cn("relative", className)}>
      <div className={cn("absolute -inset-1.5 rounded-xl bg-linear-to-r blur-xl opacity-60", config.gradient)} />
      <div
        className={cn(
          "relative rounded-xl border",
          "bg-white/10 backdrop-blur-2xl",
          "shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)]",
          config.border,
        )}
      >
        <div className="absolute inset-0 rounded-xl bg-linear-to-b from-white/15 to-transparent pointer-events-none" />
        <div className="relative p-4 flex items-start gap-3">
          <div
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-lg shrink-0 border border-white/10",
              `bg-linear-to-br ${config.gradient}`,
            )}
          >
            <Icon className={cn("w-5 h-5", config.iconColor)} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-white">{title}</h4>
            {description && <p className="mt-1 text-sm text-white/60">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export { GlassNotificationItem }
export type { NotificationPosition }
