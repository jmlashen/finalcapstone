import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getAllDrills } from '../../moduels/DrillManager';
import { deleteDrill } from '../../moduels/DrillManager';

export const DrillList = () => {

  const [drills, setDrills] = useState([]);
  const history = useHistory();
  const getDrills = () => {

    return getAllDrills().then(drillsFromAPI => {
      console.log(drillsFromAPI);
      setAnimals(drillsFromAPI)
   
    });
  };

  const handleDeleteDrill = id => {
    deleteDrill(id)
      .then(() => getAllDrills().then(setDrills));
  };


  useEffect(() => { 
    getDrills(); //this changes the state and then re-renders
  }, []); 

  return (
  
<>
<section className="section-content">
  
  <button type="button"
      onClick={() => {history.push("/drills/create")}}>
      Admit Drill
  </button>

</section>



    <div>
      {drills.map(drill_logs =>
        <DrillCard
          key={drill_logs.id}
          drill_logs={drill_logs}
          handleDeleteDrill={handleDeleteDrill} />)}
    </div>
  </>
  );
};
