import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Toefl Assist",
    "description": "Эффективная подготовка к TOEFL, IELTS, GRE и GMAT. Получите высокий балл с нашей помощью.",
    "url": "https://www.toeflassist.org",
    "logo": "https://www.toeflassist.org/logo.png",
    "sameAs": [
      "https://www.facebook.com/toeflassist",
      "https://www.instagram.com/toeflassist",
      "https://twitter.com/toeflassist"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-999-123-4567",
      "contactType": "customer service",
      "availableLanguage": ["Russian", "English"]
    },
    "offers": {
      "@type": "AggregateOffer",
      "description": "Подготовка к языковым тестам",
      "priceCurrency": "RUB",
      "offers": [
        {
          "@type": "Offer",
          "name": "Подготовка к TOEFL",
          "description": "Индивидуальная подготовка к TOEFL"
        },
        {
          "@type": "Offer",
          "name": "Подготовка к IELTS",
          "description": "Индивидуальная подготовка к IELTS"
        },
        {
          "@type": "Offer",
          "name": "Подготовка к GRE",
          "description": "Индивидуальная подготовка к GRE"
        },
        {
          "@type": "Offer",
          "name": "Подготовка к GMAT",
          "description": "Индивидуальная подготовка к GMAT"
        }
      ]
    }
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}

