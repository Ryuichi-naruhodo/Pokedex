import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StatsPokemon.css';

const StatsPokemon = ({ pokeStats }) => (
  <>
    {pokeStats.map((pokeStat, key) => (
      <div key={pokeStat.stat} className="containerBar">
        {pokeStat.type}
        <ProgressBar className={`Bar${key}`} now={pokeStat.stat} label={pokeStat.stat} />
      </div>
    ))}
  </>
);

export default StatsPokemon;
