import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../components/Book';


const BookList = () => {

    const [links, setLinks] = useState([]);
    const [text, setText] = useState('Loading llinks...');


    const getLinks = () => axios.get('https://bonini81-backend.herokuapp.com/api/v1/enlaces/');
       
             
useEffect(() => {

	getLinks()
	.then((response) => {
	const links = response.data;
	setLinks(links);
	setText(`There is ${links.length} links available.`);
	})
	.catch(() => setText(`There are no links available`));
	}, [])

        
    return ( 
         
      
<div className="container width-adb">
	<div className="row">
		<div className="col-12">

    <h1 className="titulos-cards">Available Links My Man</h1>
    <h2 className="titulos-cards"> { text } </h2>
{ links.map((link) => {
	return <Book
	key= { link._id }
	title= { link.link_title }
	description= { link.link_description }
	tag= { link.tag }
	link= { link.link_url }
	
	/>

})}

</div>
</div>
</div>

     );
} 
 

export default BookList;