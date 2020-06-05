import React from 'react';


const Book  = ( props ) => {
    return ( 

<div className="card card-bonini-link" >
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p className="card-link">Categoría: <a href="#" >Card link</a></p>
  <span>Title</span>
  <span>{ props.link_title }</span>
	<span>Tag</span>
	<span>{ props.tag }</span>
</div>
</div>

 );

}

 
export default Book;


