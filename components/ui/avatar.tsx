"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Renders a circular avatar container and forwards props to Radix UI's AvatarPrimitive.Root.
 *
 * @param className - Additional CSS classes to merge with the component's default avatar styles.
 * @returns The AvatarPrimitive.Root element configured as a rounded avatar container with merged classes and a `data-slot="avatar"` attribute.
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an avatar image element with a square aspect ratio and applied styling.
 *
 * @returns The underlying AvatarPrimitive.Image element with `data-slot="avatar-image"`, a composed `className` that includes square aspect and full size, and all received props forwarded to the primitive.
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders the avatar fallback content inside a styled circular container.
 *
 * @param className - Additional CSS classes to merge with the component's default styles
 * @param props - Additional props forwarded to `AvatarPrimitive.Fallback`
 * @returns The fallback element displayed when an avatar image is unavailable
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }