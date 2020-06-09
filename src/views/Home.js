import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../components/Book';


const Home = () => {


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

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
      <h2 data-feather="home">Categories</h2>
        <ul class="nav flex-column">
         
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file">inner-peace</span>
            
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file">web-dev-tool</span>
            
            </a>
          </li>
       
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file">js</span>
            
            </a>
          </li>
         </ul>
       
         </div>
    </nav>

    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 section-links-adb">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">My Link's Dashboard</h1>
       
      </div>

      <section>

      <h1 className="titulos-cards">Available Links My Man</h1>
      <h4 className="titulos-cards"> { text } </h4>
      { links.map((link) => {
        
	    return <Book
	    key= { link._id }
	    title= { link.link_title }
	    description= { link.link_description }
	    tag= { link.tag }
      link= { link.link_url }
      date=  { link.createdAt }
	
	    />

})}

      </section>
    </main>
  </div>
</div>



    </React.Fragment>
  );
}
 
export default Home;