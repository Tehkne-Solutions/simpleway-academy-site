import { site } from '../data/site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    areaServed: site.region,
    brand: {
      '@type': 'Brand',
      name: site.name
    }
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    inLanguage: 'pt-BR',
    publisher: {
      '@type': 'EducationalOrganization',
      name: site.name
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site.url}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function courseSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: site.courseName,
    description:
      'Curso de inglês da SimpleWay Academy com metodologia própria, app oficial, speaking, mini-stories e prática ativa.',
    provider: {
      '@type': 'EducationalOrganization',
      name: site.name,
      sameAs: site.url
    },
    educationalLevel: 'Beginner to Intermediate',
    teaches: ['English speaking', 'Listening', 'Vocabulary', 'Sentence patterns'],
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

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function articleSchema(post: { title: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `${site.url}/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: site.name
    },
    publisher: {
      '@type': 'Organization',
      name: site.name
    },
    inLanguage: 'pt-BR'
  };
}
