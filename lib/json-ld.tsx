import { personProfile, personRef, relatedApps } from "@/lib/product-graph"
import {
  GITHUB_URL,
  LICENSE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SITE_VERSION,
} from "@/lib/site"

const OCROGRAM_APP_ID = "https://ocrogram.com/#app"
const OCROGRAM_WEBSITE_ID = "https://ocrogram.com/#website"
const OCROGRAM_SAME_AS = [
  "https://jpeckham.com/projects/ocrogram/",
  GITHUB_URL,
] as const

export type JsonLdPrimitive = string | number | boolean | null
export type JsonLdValue =
  | JsonLdPrimitive
  | readonly JsonLdValue[]
  | { readonly [key: string]: JsonLdValue }

type JsonLdProps = {
  data: JsonLdValue
}

export type BreadcrumbItem = {
  name: string
  path: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type HowToStep = {
  name: string
  text: string
}

/** Serializes structured data and escapes `<` so the payload cannot break out of the script tag. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replaceAll("<", "\\u003c"),
      }}
    />
  )
}

function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

export function breadcrumbJsonLd(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function articleJsonLd(args: {
  headline: string
  description: string
  path: string
  datePublished?: string
}) {
  const url = absoluteUrl(args.path)
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: personRef(),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/opengraph-image`,
      },
    },
    ...(args.datePublished === undefined
      ? {}
      : { datePublished: args.datePublished }),
  }
}

export function collectionPageJsonLd(args: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: args.name,
    description: args.description,
    url: absoluteUrl(args.path),
    author: personRef(),
  }
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    ...personProfile(),
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": OCROGRAM_WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    author: personRef(),
    publisher: personRef(),
  }
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": OCROGRAM_APP_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "macOS 14.0 or later",
    softwareVersion: SITE_VERSION,
    license: LICENSE_URL,
    downloadUrl: GITHUB_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: personRef(),
    creator: personRef(),
    sameAs: [...OCROGRAM_SAME_AS],
    isRelatedTo: relatedApps("ocrogram"),
  }
}

export function faqJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function howToJsonLd(args: {
  name: string
  description: string
  steps: readonly HowToStep[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: args.name,
    description: args.description,
    step: args.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}
