#!/usr/bin/env node

/**
 * Script to generate Trello task cards from roadmap.md
 */

const fs = require('fs');
const path = require('path');

// Read the roadmap file
const roadmapPath = path.join(__dirname, '../SPECS/roadmap.md');
const roadmapContent = fs.readFileSync(roadmapPath, 'utf8');

// Define the features to extract
const features = [
  // Phase 2: Enhancement
  { title: "User registration and login", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "OAuth integration (Google, Apple)", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Password reset functionality", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Email verification", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Session management", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Protected routes", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "User dashboard", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Reading preferences", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Wishlist functionality", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Reading history", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Profile customization", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Shopping cart functionality", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Checkout process", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Payment integration (Stripe)", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Order management", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Shipping calculations", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Order tracking", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Advanced search with filters", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Category browsing", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Author pages", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Genre-specific pages", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Search suggestions", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Search analytics", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Personalized recommendations", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Customers also bought", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "You might like", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Trending books", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "New releases section", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },
  { title: "Staff picks algorithm", phase: "Phase 2: Enhancement", list: "🚀 Phase 2: Enhancement" },

  // Phase 3: Community
  { title: "User reviews and ratings", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Review helpfulness voting", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Review moderation system", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Author responses to reviews", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Review analytics dashboard", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Create and join book clubs", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Reading schedules", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Discussion forums", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Club recommendations", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Reading challenges", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Club analytics", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Author profiles and bios", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Author events and signings", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Author Q&A sessions", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Author newsletters", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Author analytics", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Author verification system", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Reading streaks", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Achievement badges", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Community leaderboards", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Social sharing", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },
  { title: "Community guidelines", phase: "Phase 3: Community", list: "👥 Phase 3: Community" },

  // Phase 4: Intelligence
  { title: "AI book recommendations", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Personalized homepage", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Smart search with NLP", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Content summarization", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Sentiment analysis", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Predictive inventory", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "User behavior tracking", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Preference learning", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Dynamic content", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "A/B testing framework", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Personalization analytics", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Recommendation accuracy", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "User journey tracking", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Conversion funnel analysis", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Cohort analysis", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Predictive modeling", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Business intelligence dashboard", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Real-time analytics", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "New release alerts", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Price drop notifications", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Reading reminders", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Personalized emails", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Push notifications", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },
  { title: "Smart timing", phase: "Phase 4: Intelligence", list: "🤖 Phase 4: Intelligence" },

  // Phase 5: Scale
  { title: "Multi-language support", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "International shipping", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Localized content", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Regional partnerships", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Currency conversion", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Tax calculation", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Subscription services", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Gift cards", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Bulk ordering", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Corporate accounts", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Affiliate program", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Marketplace features", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "React Native app", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Offline reading", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Mobile payments", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "App store optimization", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Cross-platform sync", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "B2B portal", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "API for partners", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "White-label solutions", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Advanced reporting", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Custom integrations", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" },
  { title: "Enterprise support", phase: "Phase 5: Scale", list: "🌍 Phase 5: Scale" }
];

// Generate Trello card format
function generateTrelloCards() {
  console.log('📋 Trello Cards to Create:\n');
  
  features.forEach((feature, index) => {
    console.log(`Card ${index + 1}:`);
    console.log(`Title: ${feature.title}`);
    console.log(`List: ${feature.list}`);
    console.log(`Description: Feature from ${feature.phase} - ${feature.title}`);
    console.log(`Labels: ${feature.phase.split(':')[0]}`);
    console.log('---\n');
  });
  
  console.log(`\nTotal cards to create: ${features.length}`);
  console.log('\n📋 Trello Board Setup Instructions:');
  console.log('1. Go to trello.com and create a new board');
  console.log('2. Name it: "BookHaven Development"');
  console.log('3. Create these lists:');
  console.log('   - 📋 Backlog');
  console.log('   - 🚀 Phase 2: Enhancement');
  console.log('   - 👥 Phase 3: Community');
  console.log('   - 🤖 Phase 4: Intelligence');
  console.log('   - 🌍 Phase 5: Scale');
  console.log('   - 🔄 In Progress');
  console.log('   - 👀 Review');
  console.log('   - ✅ Done');
  console.log('\n4. Create cards with the titles above');
  console.log('5. Move them to the appropriate lists');
  console.log('6. Add descriptions and labels as shown');
}

// Main execution
try {
  generateTrelloCards();
} catch (error) {
  console.error('Error generating cards:', error.message);
} 