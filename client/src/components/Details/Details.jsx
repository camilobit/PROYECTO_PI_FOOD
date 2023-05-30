import React, { useEffect, useState } from "react";
import { getRecipesById, deleteRecipes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import "./Details.css";
import Loader2 from '../Loaders/Loader2'

export default function Details() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const data = useSelector((state) => state.data);
  const { id } = useParams();
  const [fromApi, setFromApi] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    dispatch(getRecipesById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (data && data.fromApi) {
      setFromApi(true);
    }
  }, [data]);

  function handleSubmit(e) {
    e.preventDefault();
    if (fromApi) {
      alert("Esta receta viene de la API y no puede ser eliminada.");
    } else {
      dispatch(deleteRecipes(id))
        .then(() => {
          alert("Receta Eliminada...");
        })
        .catch(() => {
          alert("Las Recetas Provenientes de la API no pueden ser borradas");
        });
    }
  
  }  
  if (isLoading) {
    return (
      <div>
        <Loader2/>
      </div>
    );
  }
  return (
    <div className="details-container">
    <div className="container-left-details">
      <div className="container-buttons">
        <NavLink to="/home">
              <button type="button" class="btn btn-secondary">Back</button>
        </NavLink>
        <button className="button-eliminar btn btn-danger" onClick={handleSubmit}>
          Delete Recipe
        </button>
      </div>
      <img
        src={
          data.imagen ||
          'https://img.freepik.com/vector-gratis/vector-ilustracion-dibujos-animados-varias-verduras-sobre-fondo-madera_1441-519.jpg?size=626&ext=jpg&ga=GA1.2.227501000.1662982549'
        }
        alt={data.name}
        className="details-image"
      />
    </div>

      <div className="details-info">
        {/* <span className="details-id">{data.id}</span> */}
        <h2 className="details-name">{data.name}</h2>
        <h3 className="details-healthscore">HealthScore: {data.healthScore}</h3>
        <h3 className="details-type-diet">Type Diet:
        <ul className="details-diet-list">
          {data.typeDiets.map((t, index4) => (
            <li key={index4} className="details-diet-item">
              {t}
            </li>
          ))}
        </ul>
        </h3>
        <hr />
        <h5 className="details-summary">
          SUMMARY
          <h4>
          {data.summary.replace(/(<([^>]+)>)/gi, "")}
          </h4>
        </h5>
        <div className="details-steps">
          <h5>Steps:</h5>
          <ol className="details-steps-list">
            {Array.isArray(data.process)
              ? data.process.map((e, index1) =>
                  e.steps.map((f, index2) => (
                    <li
                      key={`${index1}-${index2}`}
                      className="details-step-item"
                    >
                      {f.step}
                    </li>
                  ))
                )
              : data.process.split("|").map((step, index3) => (
                  <li key={index3} className="details-step-item">
                    {step}
                  </li>
                ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
