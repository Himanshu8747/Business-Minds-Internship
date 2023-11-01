export const blogData = [
    { "heading": "The Future of Work: How AI is Changing the Job Landscape","img":"./blogImages/1.png"},
    { "heading": "The Importance of Authenticity in Business: Why Authenticity is Key to Building Trust with Your Customers", "img":"./blogImages/2.png" },
    { "heading": "Top Business Trends That Will Shape the Future of the Industry", "img":"./blogImages/3.png" },
    { "heading": "How to Build a Strong Brand Identity that Resonates with Your Target Audience", "img":"./blogImages/4.png" },
    { "heading": "Why Networking is Essential for Entrepreneurs: Building Valuable Connections in the Industry", "img":"./blogImages/5.png" },
    { "heading": "How Storytelling Can Help You Connect with Your Audience and Build Brand Loyalty", "img":"./blogImages/6.png" },
    { "heading": "How to Stay Ahead of the Competition: Tips for Keeping Up with the Latest Business Trends and Innovations", "img":"./blogImages/7.png" },
    { "heading": "Why Diversity and Inclusion are Critical for Building a Stronger, More Inclusive Workplace Culture", "img":"./blogImages/8.png" },
    { "heading": "Outsourcing 101: How Small Businesses Can Save Time, Money, and Resources", "img":"./blogImages/9.png" },
    { "heading": "Content Marketing 101: How Small Businesses Can Use Content to Drive Growth", "img":"./blogImages/2.png" },
    { "heading": "Lean Startup 101: A Guide to Reducing Risk and Accelerating Growth.", "img":"./blogImages/2.png" },
    { "heading": "Porter's Five Forces by Michael E. Porter: Understand the competitive forces that shape business strategy." },
    { "heading": "The Power of Emotional Intelligence: Discover how emotional intelligence influences leadership and decision-making" },
    { "heading": "The Four Types of Organizational Culture: Categorize and shape organizational culture for business success." },
    { "heading": "The Art of Networking\" by Harvard Business Review: Master networking strategies for career advancement." },
    { "heading": "The Art of Negotiation: Strategies for Business Success." },
    { "heading": "Financial Planning for Small Businesses: Ensuring Long-Term Viability." }
]
    
window.addEventListener('DOMContentLoaded', function(){
    let BlogContainer = this.document.getElementById('blog-container');
    if(BlogContainer){
        blogData.forEach(item => {
            const blogContainer = this.document.createElement('div');
            const blogImg = this.document.createElement("img");
            blogImg.setAttribute("src",item.img);
            blogImg.setAttribute("width","100%");
            const blodHeading = document.createElement("h3");
            blodHeading.innerHTML = item.heading;
            blogContainer.appendChild(blogImg);
            blogContainer.appendChild(blodHeading);
            BlogContainer.appendChild(blogContainer);
        });
    }
})