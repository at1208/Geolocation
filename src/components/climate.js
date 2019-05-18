import React from 'react';

const Climate = (props) => {
  const month = new Date().getMonth();

  if(props.latitude>0 && month>3 && month <9){

    return <div >
            <h1 style={{ fontFamily: 'Pacifico', marginLeft: 40 }}>Summer Hot, Let hits the beaches!</h1>
            <img  style={{ height:540, width:540, borderRadius:450, }} src="https://68.media.tumblr.com/cb49349814a762b5c4451d9fac7d20a8/tumblr_nb5mq5vxfL1txsau8o1_1280.jpg" alt='avatar'/>
        </div>
  }

  else{
    return <div>
            <h1 style={{fontFamily: 'Pacifico',marginLeft: 120}}>Cool, Let us love winter!</h1>
            <img  style={{ height:540, width:540,borderRadius:450  }} src="http://cdn.animalhi.com/1920x1080/20121026/winter%20season%20california%20mammoth%201920x1080%20wallpaper_www.animalhi.com_60.jpg" alt='avatar'/>
           </div>
  }
}
export default Climate;
