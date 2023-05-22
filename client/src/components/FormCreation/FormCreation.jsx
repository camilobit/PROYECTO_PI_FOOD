import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTypeDiets, postRecipes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./FormCreation.css";
import image from '../imagenes/foto camarera.jpg'

function controlForm(input) {
  const reg = new RegExp("^[0-9]+$");
  let errors = {};
  if (!input.name) errors.name = "Please enter the name of the recipe";
  if (!input.summary) errors.summary = "Please enter the summary of the recipe";
  if (
    input.healthScore < 0 ||
    input.healthScore > 100 ||
    !reg.test(input.healthScore)
  )
    errors.healthScore = "Please enter a health score between 0-100";
  if (!input.diets) errors.diets = "Please enter the diets of the recipe";
  return errors;
}

export default function CreateRecipe() {
  const dispatch = useDispatch();
  let listDiets = useSelector((state) => state.typediets);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [listSteps, setListSteps] = useState([]);
  const [stepDescription, setStepDescription] = useState("");
  const [input, setInput] = useState({
    name: "",
    summary: "",
    healthScore: "",
    process: "",
    diets: [],
    imagen: "",
  });

  useEffect(() => {
    dispatch(getTypeDiets());
  }, [dispatch]);

  useEffect(() => {
    const stepsString = listSteps.join("|");
    setInput({
      ...input,
      process: stepsString,
    });
  }, [listSteps]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(controlForm({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  function handleSelect(e) {
    setInput({
      ...input,
      diets: [...input.diets, e.target.value],
    });
  }

  function handleDelete(diet) {
    setInput({
      ...input,
      diets: input.diets.filter((d) => d !== diet),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const recipeData = {
      ...input,
      image: image,
    };

    dispatch(postRecipes(recipeData));

    if (
      input.name &&
      input.summary &&
      input.healthScore &&
      input.process &&
      input.diets
    ) {
      alert("Recipe created");
      setInput({
        name: "",
        summary: "",
        healthScore: "",
        process: "",
        diets: [],
        imagen: "",
      });
    } else {
      alert("Please fill all the fields");
    }
  }

  function handleChangeStep(e) {
    setStepDescription(e.target.value);
  }

  function handleStep(e) {
    e.preventDefault();
    if (stepDescription !== "") {
      setListSteps([...listSteps, stepDescription]);
      setStep(step + 1);
      setStepDescription("");
    } else {
      alert("Please enter a step");
    }
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];
    setInput({
      ...input,
      imagen: URL.createObjectURL(file),
    });
  }
  return (
    <div className="create-recipe-form">
      <div className="create-recipe-form2">
        <NavLink to="/home">
          <button className="back-button-form">Back</button>
        </NavLink>
        <h1 className="create-recipe-title">Create your recipe</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-container">
            <label className="input-label">Name:</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              className={`input-field ${errors.name ? 'input-error' : ''}`}
            />
            {errors.name && <p className="input-error">{errors.name}</p>}
          </div>

          <div className="input-container">
            <label className="input-label">Summary:</label>
            <input
              type="text"
              name="summary"
              value={input.summary}
              onChange={(e) => handleChange(e)}
              className={`input-field ${errors.summary ? 'input-error' : ''}`}
            />
            {errors.summary && <p className="input-error">{errors.summary}</p>}
          </div>

          <div className="input-container">
            <label className="input-label">HealthScore:</label>
            <input
              type="number"
              name="healthScore"
              value={input.healthScore}
              onChange={(e) => handleChange(e)}
              className={`input-field ${errors.healthScore ? 'input-error' : ''}`}
            />
            {errors.healthScore && <p className="input-error">{errors.healthScore}</p>}
          </div>

          <div className="input-container">
            <label className="input-label">Step by step:</label>
            <input
              type="text"
              name="process"
              value={stepDescription}
              onChange={handleChangeStep}
              className="input-field"
            />
            <button className="step-button" onClick={handleStep}>Add</button>
          </div>

          <div className="input-container container-img">
            <label className="input-label">Image:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="image-upload" />
            {input.imagen && (
              <img src={input.imagen} alt="Recipe" className="preview-image" />
            )}
          </div>

          <div className="input-container select-container">
            <label className="input-label">Select Diet:</label>
            <select className="select-diet" onChange={(e) => handleSelect(e)}>
              <option value="">Select a diet</option>
              {listDiets.map((t) => (
                <option key={t.name} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
            <div className="selected-diets">
              {input.diets.map((diet) => (
                <div key={diet} className="selected-diet">
                  <button
                    className="delete-diet-button"
                    onClick={() => handleDelete(diet)}
                  >
                    X
                  </button>
                  <span>{diet}</span>
                </div>
              ))}
            </div>
          </div>

          {errors.hasOwnProperty("name") ||
          errors.hasOwnProperty("summary") ||
          errors.hasOwnProperty("healthScore") ? (
            <p className="error-message">Please complete all the inputs to create your recipe</p>
          ) : (
            <button type="submit" className="create-button">
              Create Recipe
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

