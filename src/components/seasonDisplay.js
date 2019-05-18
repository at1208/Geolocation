import React from 'react';

const Climate =(latitude, month) => {
    if(latitude>0 && month>3 && month <9){
      return <div>I just like the beaches in the summer </div>
    }
    else{
      return <div>Let us love winter, for it is the spring of genius</div>
    }
}

const SeasonDisplay = (props) => {
  const season = Climate(props.lati, new Date().getMonth())
  console.log()
  return (<div>
         <h1>{season.props.children}</h1>
         </div>
  )

}
export default SeasonDisplay;
