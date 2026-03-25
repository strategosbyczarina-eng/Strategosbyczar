export function generateSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Czarina Agoncillo",
      "jobTitle": ["Developer", "SEO Specialist", "Author"],
      "url": "https://czarinaagoncillo.com",
      "description": "Developer, SEO Specialist, Systems Builder and Author."
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Strategos",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "All",
      "description": "A high-end threat analysis system."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Strategos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A threat analysis system that analyzes links, files, and URLs to prevent malware execution."
          }
        }
      ]
    }
  ];
}
