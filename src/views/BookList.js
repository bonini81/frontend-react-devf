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
         
      
<React.Fragment>

    <h1>Available Links My Man</h1>
    <h2> { text } </h2>
{ links.map((link) => {
	return <Book
	key={link._id}
	link_title={link.link_title}
	tag={link.tag}
	/>
})}
	



        

</React.Fragment>

     );
} 
 

export default BookList;