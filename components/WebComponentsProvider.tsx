"use client"
import React, { Fragment, useEffect } from "react"

export default function WebComponentsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Dynamic import ensures the library is only loaded in the browser
    // This prevents SSR/build-time evaluation that causes "document is not defined" errors
    import("cn-lit-tw-starter").catch((error) => {
      console.error("Failed to load web components library:", error)
    })
  }, [])

  return <Fragment>{children}</Fragment>
}
