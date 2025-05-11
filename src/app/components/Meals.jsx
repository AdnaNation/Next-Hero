"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState(" ");
  const [meals, setMeals] = useState([]);
  const loadData = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await res.json();
    setMeals(data.meals);
  };
  useEffect(() => {
    loadData();
  }, [search]);
  const handler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="mt-12 ">
      <input
        onChange={handler}
        className="p-4 outline-1 border-transparent text-slate-900"
        type="text"
        placeholder="search"
      />
      {/* <button onClick={() => loadData()} className="bg-red-400 p-4">
        Search
      </button> */}

      <div className="grid md:grid-cols-3 gap-4">
        {meals?.length === 0 || (meals === null && <p>No Meal found</p>)}
        {meals?.map((meal) => (
          <div className="border p-3" key={meal.idMeal}>
            <Image
              src={meal.strMealThumb}
              alt={meal.strMealThumb}
              width={700}
              height={500}
            />
            <h6 className="font-bold">Title: {meal.strMeal}</h6>
            <h6>Description: {meal.strInstructions}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
