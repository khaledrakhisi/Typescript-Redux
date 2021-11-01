import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const {searchRepositories} = useActions();
  const {loading, data, error} = useTypedSelector((state)=>state.repositories);
  console.log(data);
  

  const eh_formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(term);
    
    searchRepositories(term);
  };

  return (
    <div style={{textAlign:"left", padding: "10px"}}>
      <form onSubmit={eh_formSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
        {loading && <h3>loading...</h3>}
        {error && <h3>{error}</h3>}
        {data && data.map((item)=>{
            return <div key={item}>{item}</div>;
        })}
      </form>
    </div>
  );
};

export default RepositoriesList;
