// Site loader - populates HTML from config.js
document.addEventListener('DOMContentLoaded', function() {
  
  // Helper function to create star rating
  function getStarRating(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

  // Helper function to convert text with [link](url) syntax to HTML
  function parseMarkdownLinks(text) {
    // Replace [text](url) with <a href="url">text</a>
    return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }

  // Populate navigation links
  const navLinks = document.querySelectorAll('.nav-links a[target="_blank"]');
  navLinks[0].href = siteConfig.social.substack;
  navLinks[1].href = siteConfig.social.twitter;
  navLinks[2].href = siteConfig.social.linkedin;

  // Populate page title
  document.title = `${siteConfig.name} - ${siteConfig.title}`;
  
  // Populate logo/name
  document.querySelector('.logo').textContent = siteConfig.name;

  // Populate About section
  document.querySelector('.about-image img').src = siteConfig.about.profileImage;
  document.querySelector('.about-image img').alt = `${siteConfig.name} profile picture`;
  document.querySelector('.intro-text').innerHTML = parseMarkdownLinks(siteConfig.about.intro);
  
  const bioContainer = document.querySelector('.about-text');
  // Clear existing bio paragraphs (keep intro-text)
  const existingPs = bioContainer.querySelectorAll('p:not(.intro-text)');
  existingPs.forEach(p => p.remove());
  
  // Add bio paragraphs with HTML support
  siteConfig.about.bio.forEach(paragraph => {
    const p = document.createElement('p');
    p.innerHTML = parseMarkdownLinks(paragraph);
    bioContainer.appendChild(p);
  });

  // Populate Projects section
  const projectsGrid = document.querySelector('.projects-grid');
  projectsGrid.innerHTML = '';
  
  siteConfig.projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    let projectHTML = '';
    
    // Title with optional link
    if (project.url && project.url.trim() !== '') {
      projectHTML += `<h3><a href="${project.url}" target="_blank" rel="noopener">${project.title}</a></h3>`;
    } else {
      projectHTML += `<h3>${project.title}</h3>`;
    }
    
    projectHTML += `<p class="project-description">${parseMarkdownLinks(project.description)}</p>`;
    
    if (project.impact && project.impact.trim() !== '') {
      projectHTML += `<p class="project-impact"><strong>Impact:</strong> ${parseMarkdownLinks(project.impact)}</p>`;
    }
    
    projectCard.innerHTML = projectHTML;
    projectsGrid.appendChild(projectCard);
  });

  // Populate Consulting section
  const consultingGrid = document.querySelector('.consulting-grid');
  consultingGrid.innerHTML = '';
  
  siteConfig.consulting.forEach(service => {
    const consultingCard = document.createElement('div');
    consultingCard.className = 'project-card';
    
    let consultingHTML = `<h3>${service.title}</h3>`;
    consultingHTML += `<p class="project-description">${parseMarkdownLinks(service.description)}</p>`;
    
    consultingCard.innerHTML = consultingHTML;
    consultingGrid.appendChild(consultingCard);
  });

  // Populate Research section
  const researchGrid = document.querySelector('.research-grid');
  researchGrid.innerHTML = '';
  
  siteConfig.research.forEach(paper => {
    const researchItem = document.createElement('div');
    researchItem.className = 'research-item';
    
    let researchHTML = '';
    
    // Title with optional link
    if (paper.url) {
      researchHTML += `<h3><a href="${paper.url}" target="_blank" rel="noopener">${paper.title}</a></h3>`;
    } else {
      researchHTML += `<h3>${paper.title}</h3>`;
    }
    
    researchHTML += `<p class="research-authors">${paper.authors}</p>`;
    researchHTML += `<p class="research-venue">${paper.venue}</p>`;
    researchHTML += `<p class="research-description">${parseMarkdownLinks(paper.description)}</p>`;
    
    // Add tags if they exist
    if (paper.tags && paper.tags.length > 0) {
      researchHTML += '<div class="research-tags">';
      paper.tags.forEach(tag => {
        researchHTML += `<span class="tag">${tag}</span>`;
      });
      researchHTML += '</div>';
    }
    
    researchItem.innerHTML = researchHTML;
    researchGrid.appendChild(researchItem);
  });

  // Populate Articles section
  const articlesContainer = document.querySelector('.content-group:first-child');
  const articlesGrid = articlesContainer.querySelector('h3').parentElement;
  // Remove all existing article items
  const existingArticles = articlesGrid.querySelectorAll('.article-item');
  existingArticles.forEach(item => item.remove());
  
  siteConfig.articles.forEach(article => {
    const articleItem = document.createElement('div');
    articleItem.className = 'article-item';
    articleItem.innerHTML = `
      <h4><a href="${article.url}" target="_blank" rel="noopener">${article.title}</a></h4>
      <p class="article-meta">${article.source} • ${article.date}</p>
      <p class="article-excerpt">${parseMarkdownLinks(article.excerpt)}</p>
    `;
    articlesGrid.appendChild(articleItem);
  });

  // Populate Reviews section
  const reviewsContainer = document.querySelector('.content-group:last-child');
  const reviewsGrid = reviewsContainer.querySelector('h3').parentElement;
  // Remove all existing review items
  const existingReviews = reviewsGrid.querySelectorAll('.article-item');
  existingReviews.forEach(item => item.remove());
  
  siteConfig.reviews.forEach(review => {
    const reviewItem = document.createElement('div');
    reviewItem.className = 'article-item';
    reviewItem.innerHTML = `
      <h4><a href="${review.url}" target="_blank" rel="noopener">${review.title}</a></h4>
      <p class="article-meta">${getStarRating(review.rating)} • Goodreads</p>
      <p class="article-excerpt">${parseMarkdownLinks(review.excerpt)}</p>
    `;
    reviewsGrid.appendChild(reviewItem);
  });

  // Populate Forecasts section
  const forecastsContainer = document.querySelector('.forecasts-container');
  forecastsContainer.innerHTML = '';
  
  siteConfig.forecasts.forEach(forecast => {
    const forecastItem = document.createElement('div');
    forecastItem.className = 'article-item';
    
    let forecastHTML = `<h4><a href="${forecast.url}" target="_blank" rel="noopener">${forecast.title}</a></h4>`;
    forecastHTML += `<p class="article-meta"><strong>${forecast.myPrediction}</strong> • ${forecast.date}</p>`;
    
    // Add comment excerpt if available
    if (forecast.commentUrl && forecast.commentExcerpt && forecast.commentUrl.trim() !== '' && forecast.commentExcerpt.trim() !== '') {
      forecastHTML += `<p class="article-excerpt"><a href="${forecast.commentUrl}" target="_blank" rel="noopener">${forecast.commentExcerpt}...</a></p>`;
    }
    
    forecastItem.innerHTML = forecastHTML;
    forecastsContainer.appendChild(forecastItem);
  });

  // Update Metaculus profile link in forecasts intro
  const forecastIntro = document.querySelector('#forecasts .section-intro a');
  forecastIntro.href = siteConfig.social.metaculus;

  // Populate Contact section
  document.querySelector('.contact-intro').innerHTML = parseMarkdownLinks(siteConfig.contact.intro);
  
  const contactLinks = document.querySelectorAll('.contact-link');
  contactLinks[0].href = siteConfig.social.linkedin;
  contactLinks[1].href = siteConfig.social.twitter;
  contactLinks[2].href = siteConfig.social.substack;
  contactLinks[3].href = siteConfig.social.goodreads;
  contactLinks[4].href = siteConfig.social.metaculus;

  // Update footer year
  document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`;
});
