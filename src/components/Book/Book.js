import React from 'react';


const Book  = ( props ) => {
    return ( 


<div className="card card-bonini-link" >
<div className="card-body">
  <h2 className="card-title">{ props.title }</h2>
  
  <p className="card-text"> { props.description } </p>
  <p className="card-text"><span className="estilo-cards-adb">Categoría: </span> { props.tag }</p>
  <p className="card-text"><span className="estilo-cards-adb">Date: </span>  { props.date } </p>
  <p className="card-link"><a href= {`${props.link}`}  target="_blank" >{ props.link }</a></p>
	
</div>
</div>


 );

}

 
export default Book;


