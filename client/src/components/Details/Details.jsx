import React, { useEffect } from "react";
import { getRecipesById, deleteRecipes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import "./Details.css";

export default function Details() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipesById(id));
  }, [dispatch, id]);
  console.log(data)

  if (!data || !data.process) {
    return <div>Loading...</div>;
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(deleteRecipes(id))
  }

  return (
    <div className="details-container">
    <NavLink to="/home">
          <button className="back-button">Back</button>
        </NavLink>
        <button onClick={handleSubmit}>
          eliminar
        </button>
      <img
        src={
          data.imagen ||
          'https://img.freepik.com/vector-gratis/vector-ilustracion-dibujos-animados-varias-verduras-sobre-fondo-madera_1441-519.jpg?size=626&ext=jpg&ga=GA1.2.227501000.1662982549'
        }
        alt={data.name}
        className="details-image"
      />
      <hr />
      <div className="details-info">
        <span className="details-id">{data.id}</span>
        <hr />
        <h2 className="details-name">{data.name}</h2>
        <hr />
        <h3 className="details-healthscore">HealthScore: {data.healthScore}</h3>
        <hr />
        <h3 className="details-type-diet">Type Diet:</h3>
        <ul className="details-diet-list">
          {data.typeDiets.map((t, index4) => (
            <li key={index4} className="details-diet-item">
              {t}
            </li>
          ))}
        </ul>
        <hr />
        <h5 className="details-summary">
          Summary: {data.summary.replace(/(<([^>]+)>)/gi, "")}
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
