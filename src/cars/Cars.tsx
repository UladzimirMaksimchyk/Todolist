import React from "react";



type NewComponentPropsType = {
    cars:Cars[]
}


type Cars = {
    manufacturer:string,
     model:string

}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <ul>
            {props.cars.map((CarsArray, index)=>{
                return(
                    <li key={index}>
                        <span>{CarsArray.manufacturer}</span>
                        <span>{CarsArray.model}</span>
                    </li>
                )
            })}
        </ul>
    );
};



  