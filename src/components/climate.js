import React from 'react';

const Climate = (props) => {
  const month = new Date().getMonth();

  if(props.latitude>0 && month>3 && month <9){

    return <div className='container text-center'>
            <h1 style={{ fontFamily: 'Pacifico', marginLeft: 40 }}>It's Summer, I love beaches</h1>
            <img  style={{ height:700, width:1140,  }} src="https://philnews.ph/wp-content/uploads/2019/04/Summer-Food.jpg" alt=' '/>
        </div>
  }

  else{
    return <div  className='container text-center'>
            <h1 style={{fontFamily: 'Pacifico',marginLeft: 120}}>Feeling Cool, Let us love winter!</h1>
            <img  style={{ height:700, width:1140,  }} src="https://www.todaysparent.com/wp-content/uploads/2017/01/50-essential-winter-activities-for-families.jpg" alt=' '/>
           </div>
  }
}
export default Climate;
