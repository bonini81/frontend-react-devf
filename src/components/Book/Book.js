import React from 'react';


const Book  = ( props ) => {
    return ( 


<div className="card card-bonini-link" >
<div className="card-body">
  <h5 className="card-title">{ props.title }</h5>
  
  <p className="card-text"> { props.description } </p>
  <p className="card-text">Categoría:  <span> { props.tag } </span></p>
  <p className="card-link"><a href= {`${props.link}`}  target="_blank" >{ props.link }</a></p>
	
</div>
</div>


 );

}

 
export default Book;


