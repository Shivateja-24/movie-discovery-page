import React from "react";
import Search from "./components/Search.jsx";

const App = () => {
  return (
    <main>
      <div className="my-0 py-0">
        <header>
          <img src="/logo.png" alt="Logo" />
          <h1 className="text-gradient text-5xl">
            Discover Your Next Favorite
            <span className="text-gradient"> Movie</span>
          </h1>
        </header>
        <Search />
        <section className="all-movies mt-10">
          <h2>All Movies</h2>
          <ul>{/* All movies will be rendered here */}</ul>
        </section>
      </div>
    </main>
  );
};

export default App;
