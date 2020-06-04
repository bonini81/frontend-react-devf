import React, { useState } from 'react';
import axios from 'axios';




const Home = () => {
  return (
    <React.Fragment>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">
      <h2 data-feather="home">Categorias</h2>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file">Ya tu zabe!</span>
              Orders
            </a>
          </li>
       
         </ul>
       
         </div>
    </nav>

    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">My Link's Dashboard</h1>
       
      </div>

      <h2>Bonini81</h2>
      <section className="table-responsive">

      <div className="card card-bonini-link" >
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-link">Categoría: <a href="#" >Card link</a></p>
    
  </div>
</div>

      </section>
    </main>
  </div>
</div>



    </React.Fragment>
  );
}
 
export default Home;