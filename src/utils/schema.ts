import { site } from '../data/site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: site.name,
    url: site.url,
    description: site.description,
    brand: {
      '@type': 'Brand',
      name: site.name
    }
  };
}

export function courseSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'SimpleWay English',
    description:
      'Curso de inglês da SimpleWay Academy com metodologia própria, app oficial, speaking, mini-stories e prática ativa.',
    provider: {
      '@type': 'EducationalOrganization',
      name: site.name,
      sameAs: site.url
    },
    inLanguage: 'pt-BR'
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
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
