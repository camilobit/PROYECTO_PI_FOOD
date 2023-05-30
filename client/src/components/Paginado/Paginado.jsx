import React from "react";
import "./Paginado.css";
import { useEffect } from "react";

export default function Paginado({ recipesPerPage, allRecipes, paginado, currentPage }) {

  useEffect(()=>{
    paginado(1)
  },[allRecipes])

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

