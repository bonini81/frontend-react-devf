import React, { useEffect } from 'react';
import axios from 'axios';
import Book from '../components/Book';


const BookList = () => {



    const getLinks = async() => { 
        const response = await axios.get('https://bonini81-backend.herokuapp.com/api/v1/enlaces/');
        console.log("You Fucking Fagget");
        console.log(response.data);
       
        }

        useEffect(() => {
            getLinks();
        })
        
    return ( 
         
      
<React.Fragment>

    <h1>Available Links My Man</h1>
  
        
</React.Fragment>

     );
} 
 

export default BookList;