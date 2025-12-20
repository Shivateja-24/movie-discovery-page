# 🎬 Movie Discovery Page

## Overview
Movie Discovery Page is a React-based web application that allows users to search for movies, explore popular titles, and view trending movies based on aggregated user search activity. The application integrates the TMDB API for fetching movie data and uses Appwrite to persist search analytics for generating trending results.

This project was built to strengthen understanding of API integration, state management, and performance optimization in a real-world frontend scenario.

---

## Features
- Search movies using real-time API integration
- Browse popular and trending movies
- Trending logic based on user search frequency
- Debounced search to optimize API calls
- Reusable and modular React components
- Responsive and clean UI using Tailwind CSS
- Loading and error state handling

---

## Tech Stack
- **Frontend:** React.js, Vite
- **Styling:** Tailwind CSS
- **API:** The Movie Database (TMDB)
- **Backend Service:** Appwrite (Database for search analytics)
- **Utilities:** react-use (debounce hook)

---

## How Trending Movies Work
- Each valid search term is stored in an Appwrite database with a count value
- If a search term already exists, its count is incremented
- Trending movies are fetched by ordering records based on search count
- The UI displays rankings dynamically based on the returned order

---

## Environment Variables
Create a `.env.local` file in the root directory and configure the following:

VITE_TMDB_API_KEY=`your_tmdb_bearer_token`
VITE_APPWRITE_PROJECT_ID=`your_project_id`
VITE_APPWRITE_DATABASE_ID=`your_database_id`
VITE_APPWRITE_COLLECTION_ID=`your_collection_id`(table name)

---
## Getting Started
```bash
npm install
npm run dev
```

---

## Learning Outcomes
- Improved understanding of React hooks and component-based architecture  
- Hands-on experience integrating third-party APIs  
- Implemented debounced search to optimize API calls and improve performance  
- Learned to persist and query application data using Appwrite  
- Practiced clean UI state handling for loading and error scenarios  

---

## Challenges
- Managing multiple UI states (loading, error, and success) during asynchronous API calls  
- Implementing debounced search logic to reduce unnecessary API requests  
- Designing reusable components while keeping the main application logic clean  
- Understanding and integrating Appwrite database queries for tracking trending data  
- Handling environment variables correctly during local development and deployment  

---

## Links
- **GitHub Repository:** https://github.com/Shivateja-24/movie-discovery-page 
- **Live Demo:** https://movie-discovery-page.vercel.app/
---

## Note
This project focuses on frontend application logic and API integration. Additional features such as routing or authentication can be added as future enhancements.

