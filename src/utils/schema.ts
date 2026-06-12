import { faqs, site } from '../data/site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: site.name,
    url: site.url,
    description: site.description,
    brand: site.course,
    logo: `${site.url}${site.logos.mark}`,
    image: `${site.url}${site.logos.og}`,
    sameAs: [site.appUrl],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.whatsappDisplay,
      contactType: 'customer service',
      availableLanguage: ['Portuguese', 'English']
    }
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    image: `${site.url}${site.logos.og}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site.url}/blog/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function courseSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: site.course,
    description:
      'Curso de inglês com metodologia SimpleWay, app oficial, histórias guiadas, Fala Inicial, Desafio das 72 Frases e Revisão Inteligente.',
    provider: {
      '@type': 'EducationalOrganization',
      name: site.name,
      url: site.url,
      logo: `${site.url}${site.logos.mark}`
    },
    educationalLevel: 'Beginner to intermediate',
    teaches: ['Speaking', 'Listening', 'Reading', 'Writing', 'English communication']
  };
}

export function faqSchema(items = faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

export function articleSchema({ title, description, url, datePublished = '2026-06-12' }: { title: string; description: string; url: string; datePublished?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    author: {
      '@type': 'Organization',
      name: site.author
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}${site.logos.mark}`
      }
    }
  };
}
