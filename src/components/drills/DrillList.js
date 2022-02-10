import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getAllDrills } from '../../moduels/DrillManager';
import { deleteDrill } from '../../moduels/DrillManager';
import { DrillCard } from './DrillCard';

export const DrillList = () => {

    const [drills, setDrills] = useState([]);
    const history = useHistory();
    const getDrills = () => {

        return getAllDrills().then(drillsFromAPI => {
            console.log(drillsFromAPI);
            setDrills(drillsFromAPI)

        });
    };

    const handleDeleteDrill = id => {
        window.confirm("Are you sure you want to Delete this drill?")
        deleteDrill(id)
            .then(() => getAllDrills().then(setDrills));
            
    };


    useEffect(() => {
        getDrills();
    }, []);

    return (

        <>
            <div>

                {drills.map(drill =>
                    <DrillCard
                        key={drill.id}
                        drill={drill}
                        handleDeleteDrill={handleDeleteDrill} />)}
            </div>


        </>
    );
};
