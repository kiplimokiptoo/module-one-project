// Search functionality
const searchData = [
    {
        title: "Welcome to My Journey",
        description: "My transformative journey to become a skilled web developer and digital innovator.",
        keywords: ["journey", "developer", "web", "innovation", "future"],
        page: "index.html"
    },
    {
        title: "Future Accomplishments",
        description: "Complete advanced full-stack web development certification, build production-ready applications, master React and Node.js.",
        keywords: ["accomplishments", "certification", "react", "nodejs", "applications", "web development"],
        page: "index.html"
    },
    {
        title: "My Autobiography & Vision",
        description: "Detailed autobiography and long-term vision for 2026-2030, core values, and what drives me.",
        keywords: ["autobiography", "vision", "goals", "values", "learning", "about"],
        page: "about.html"
    },
    {
        title: "Core Values",
        description: "Excellence, Innovation, Collaboration, Continuous Learning, Impact - my guiding principles.",
        keywords: ["values", "excellence", "innovation", "collaboration", "learning", "impact"],
        page: "about.html"
    },
    {
        title: "Future Timeline",
        description: "Short term (2026-2027), medium term (2027-2028), and long term (2028-2030) goals and milestones.",
        keywords: ["future", "timeline", "goals", "2026", "2027", "2028", "2030", "milestones"],
        page: "about.html"
    },
    {
        title: "Contact Form",
        description: "Get in touch via email, phone, or contact form. Share your name, email, and message.",
        keywords: ["contact", "email", "phone", "message", "form", "get in touch"],
        page: "contact.html"
    },
    {
        title: "Kiplimo",
        description: "Portfolio and personal brand - :) SMILEY.",
        keywords: ["kiplimo", "smiley", "portfolio", "brand", "name"],
        page: "index.html"
    }
];

function performSearch(query) {
    if (!query || query.trim().length === 0) {
        displaySearchResults([]);
        return;
    }

    const lowerQuery = query.toLowerCase();
    const results = searchData.filter(item => 
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.keywords.some(keyword => keyword.includes(lowerQuery))
    );

    displaySearchResults(results);
}

function displaySearchResults(results) {
    let resultsHTML = '';

    if (results.length === 0) {
        resultsHTML = '<p class="no-results">No results found. Try searching for: journey, developer, vision, goals, contact, etc.</p>';
    } else {
        resultsHTML = '<h3>Search Results (' + results.length + ')</h3>';
        results.forEach(result => {
            resultsHTML += `
                <div class="search-result-item">
                    <h4><a href="${result.page}">${result.title}</a></h4>
                    <p>${result.description}</p>
                    <span class="result-page">Page: ${result.page}</span>
                </div>
            `;
        });
    }

    const resultsContainer = document.getElementById('search-results');
    if (resultsContainer) {
        resultsContainer.innerHTML = resultsHTML;
        resultsContainer.style.display = 'block';
    }
}

// Event listener for search
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.searchbox button');
    const searchInput = document.querySelector('.searchbox input');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value;
            performSearch(query);
        });

        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const query = searchInput.value;
                performSearch(query);
            }
        });
    }
});
