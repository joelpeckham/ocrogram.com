"use client"

import { useEffect, useRef, useState } from "react"
import { RiCheckLine, RiFileCopyLine } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { INSTALL_COMMANDS } from "@/lib/site"

export function InstallBlock() {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== undefined) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  async function copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMANDS)
      setCopied(true)
      if (timeoutRef.current !== undefined) {
        window.clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = window.setTimeout(() => {
        setCopied(false)
        timeoutRef.current = undefined
      }, 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="relative overflow-hidden bg-card ring-1 ring-foreground/10">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="text-xs text-muted-foreground">install</span>
        <Button
          variant="ghost"
          size="xs"
          onClick={() => {
            void copy()
          }}
          aria-label={copied ? "Copied" : "Copy install commands"}
        >
          {copied ? (
            <RiCheckLine data-icon="inline-start" />
          ) : (
            <RiFileCopyLine data-icon="inline-start" />
          )}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code>{INSTALL_COMMANDS}</code>
      </pre>
    </div>
  )
}
