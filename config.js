// Site Configuration

const siteConfig = {
  // Personal Information
  name: "Max Räuker",
  title: "Homepage",
  location: "Berlin, Germany",
  
  // Social Media & External Links
  social: {
    substack: "https://substack.com/@maxrauker",
    twitter: "https://x.com/MaxRauker/",
    linkedin: "https://www.linkedin.com/in/max-raeuker",
    goodreads: "https://www.goodreads.com/user/show/92096951-max",
    metaculus: "https://www.metaculus.com/accounts/profile/110500/"
  },

  // About Section
  about: {
    intro: "Shining a light on the Good, the Bad, and the Uncertain.",
    bio: [
      "I'm an AI strategy and governance researcher based in Berlin, working at the intersection of policy analysis, forecasting, project management, and strategy consultation.",
      // Example of adding hyperlinks: use [link text](url) syntax
      // "I work with organizations like [MATS](https://www.matsprogram.org/) and [Rethink Priorities](https://rethinkpriorities.org/)."
    ],
    profileImage: "https://drive.google.com/uc?export=view&id=1Rb5GHv0jnAr6DjN6uekd2Tnl1SOszxVJ"
  },

  // Projects
  projects: [
    {
      title: "AI Policy Bulletin",
      description: "A newsletter and platform focused on AI governance and policy developments. Successfully raised over $160,000 in funding and built a community of 1000+ subscribers including researchers at leading AI safety institutions.",
      impact: "Connecting policymakers, researchers, and practitioners in the AI governance space with timely analysis and insights.",
      url: "https://www.aipolicybulletin.org/"
    },
    {
      title: "TAIGA (hibernated)",
      description: "A research sharing platform for AI governance researchers to share preliminary research drafts and insights. Reach out if you're interested in leading or funding it.",
      impact: "",
      url: "https://www.taigarchive.com/"
    },
  ],

  // Consulting Services
  consulting: [
    {
      title: "AI Strategy & Policy Analysis",
      description: "Strategic consulting on AI governance challenges, policy development, and organizational positioning in the AI landscape. Drawing on experience with leading AI safety institutions and policy organizations.",
      services: []
    },
    {
      title: "Research & Forecasting",
      description: "Quantitative analysis and forecasting for AI-related questions. Expertise in expert surveys, stakeholder analysis, and probabilistic forecasting (top #14 forecaster on Metaculus in 2024).",
      services: []
    },
    {
      title: "Project Management & Strategy",
      description: "End-to-end project management for AI governance initiatives, including fundraising strategy, stakeholder engagement, and operational execution. Track record includes raising $260,000+ and building communities of 900+ engaged professionals.",
      services: []
    },
    {
      title: "Data Science & Analysis",
      description: "Applied data science for policy and strategy questions. Background in machine learning, statistical modeling, and Bayesian analysis with practical experience in research settings.",
      services: []
    }
  ],

  // Research
  research: [
    {
      title: "Survey on intermediate goals in AI governance",
      authors: "Max Räuker, Michael Aird",
      venue: "Rethink Priorities, 2023",
      url: "https://rethinkpriorities.org/publications/survey-on-intermediate-goals-in-ai-governance",
      description: "Comprehensive survey of strategic perspectives in the AI governance field (n=107)",
      tags: ["AI strategy", "Expert survey"] // Optional
    },

    {
      title: "Research Agenda: Reducing barriers for pausing before developing superintelligent AI",
      authors: "Max Räuker",
      venue: "MATS, 2025",
      url: "https://docs.google.com/document/d/1IKeZSbcQ-IQ5aDga57ArLNk_Y_Epk6R_-ejTrx0cJhg/edit",
      description: "Research agenda developed at MATS.",
      tags: ["AI strategy"]
    }
  ],

  // Recent Articles (Substack posts)
  articles: [
    {
      title: "Article Title Here",
      url: "https://yoursubstack.substack.com/p/article-url",
      source: "AI Policy Bulletin",
      date: "January 2025",
      excerpt: "Brief description or excerpt of the article content..."
    },
    {
      title: "Another Article Title",
      url: "https://yoursubstack.substack.com/p/article-url",
      source: "AI Policy Bulletin",
      date: "January 2025",
      excerpt: "Brief description or excerpt of the article content..."
    },
    {
      title: "Third Article Title",
      url: "https://yoursubstack.substack.com/p/article-url",
      source: "AI Policy Bulletin",
      date: "December 2024",
      excerpt: "Brief description or excerpt of the article content..."
    }
  ],

  // Recent Book Reviews (Goodreads)
  reviews: [
    {
      title: "Book Title by Author",
      url: "https://goodreads.com/review/show/your-review-id",
      rating: 5, // Number of stars (1-5)
      excerpt: "Brief excerpt from your review or thoughts on the book..."
    },
    {
      title: "Another Book Title by Author",
      url: "https://goodreads.com/review/show/your-review-id",
      rating: 4,
      excerpt: "Brief excerpt from your review or thoughts on the book..."
    }
  ],

  // Recent Forecasts (Metaculus)
  forecasts: [
    {
      title: "Forecast Question Title",
      url: "https://metaculus.com/questions/12345/",
      myPrediction: "65%",
      date: "Jan 15, 2025",
      description: "Brief context about the question or your reasoning...",
      commentUrl: "", // Optional: URL to your comment on the forecast
      commentExcerpt: "" // Optional: First ~10 words of your comment
    },
    {
      title: "Another Forecast Question",
      url: "https://metaculus.com/questions/12346/",
      myPrediction: "42%",
      date: "Jan 8, 2025",
      description: "Brief context about the question or your reasoning...",
      commentUrl: "",
      commentExcerpt: ""
    },
    {
      title: "Third Forecast Question",
      url: "https://metaculus.com/questions/12347/",
      myPrediction: "78%",
      date: "Dec 20, 2024",
      description: "Brief context about the question or your reasoning...",
      commentUrl: "",
      commentExcerpt: ""
    }
  ],

  // Contact Section
  contact: {
    intro: "I'm open to collaborations, consultations, and discussions about AI governance and policy. Feel free to reach out via the links in the header, or find me on:"
  }
};
