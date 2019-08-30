import React from "react";
import "./styles.css";

export default function PowerStats({ power: powerful }) {
  const { intelligence, strength, speed, durability, power, combat } = powerful;
  return (
    <>
        <h1>Powerstats</h1>
        <div className="gridPower">
        <strong>Intelligence</strong>
        <p>{intelligence}</p>
        <strong>Strength</strong>
        <p>{strength}</p>
        <strong>Speed</strong>
        <p>{speed}</p>
        <strong>Durability</strong>
        <p>{durability}</p>
        <strong>Power</strong>
        <p>{power}</p>
        <strong>Combat</strong>
        <p>{combat}</p>
        </div>
    </>
  );
}
