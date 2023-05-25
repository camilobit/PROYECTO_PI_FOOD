import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';


export default function LandingPage() {
  const [loading, setLoading] = useState(false);

  const handleExploreRecipes = () => {
    setLoading(true);
    // Aquí puedes realizar tareas adicionales antes de redirigir a la ruta '/home'
  };

  return (
    <div className="All">
      <div className="content">
        {loading ? (
          <div>Cargando...</div>
        ) : (
          <NavLink className="NavLink" to="/home" onClick={handleExploreRecipes}>
            <button>Explorar Recetas</button>
          </NavLink>
        )}
      </div>
    </div>
  );
}
