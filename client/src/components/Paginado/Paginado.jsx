import React from "react";
import "./Paginado.css";

export default function Paginado({ recipesPerPage, allRecipes, paginado, currentPage }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav>
      <ul className="ul">
        {pageNumbers.map((n) => (
          <li key={n}>
            <button
              className={currentPage === n ? "container current" : "container"}
              onClick={() => paginado(n)}
            >
              {n}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

