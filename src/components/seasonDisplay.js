import React from 'react';
import Climate from './climate';

const SeasonDisplay = (props) => {
  return (<div>
         <Climate latitude={props.lati}/>
         </div>
  )
}
export default SeasonDisplay;
