import React, { useState, useEffect } from 'react';
import { getDrillById } from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const DrillDetail = () => {
  const [drill, setDrill] = useState({ drill_date: "", start_time: "", end_time: "", light_check: "", notes: ""});

  const {drillId} = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect", drillId)
    getDrillById(drillId)
      .then(drill => {
        setDrill({
          drill_date: drill.drill_date,
          start_time: drill.start_time,
          end_time: drill.end_time,
          light_check: drill.light_check,
          drill_type: drill.drill_type.title,
          



        });
      });
  }, [drillId]);

  return (
    <section>
      <div>{drill.drill_date}</div>
      <div>{drill.start_time}</div>
      <div>{drill.end_time}</div>
      <div>{drill.light_check}</div>
      <div>{drill.notes}</div>
      <div>Drill Type: {drill?.drill_type}</div>

    </section>
  );
}
