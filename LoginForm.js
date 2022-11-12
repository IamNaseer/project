import React from 'react'

export default function LoginForm() {
  
  return (

    <div class="logo"> 
    {/* <img src="https://gramtarang.org.in/wp-content/uploads/2017/03/CUTM-logo-300x189.jpg" alt=''/> */}
    
    <div class="container">
    <div class="form-body"><br></br>
    

        <div class="row">
                  <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h1>Tutor Profile</h1><br></br>
                        <form class="requires-validation" novalidate/>

                              <div class="col-md-12">
                                <h5>Name:</h5>
                               <input class="form-control" type="text" name="name" placeholder="Full Name" required/>
                            </div><br></br>

                              <div class="col-md-12">
                              <h5>Email-Address:</h5>
                                <input class="form-control" type="email" name="email" placeholder="E-mail Address" required/>
                            </div><br></br>
                           <div class="col-md-12">
                           <h5>Ph.Number:</h5>
                              <input class="form-control" type="number" name="number" placeholder="Ph.Number" required/>
                           </div><br></br>

                              <div class="col-md-12">
                              <h5>Enter Department:</h5>
                                <input class="form-control" type="text" name="text" placeholder="Enter Department" required/>
                            </div><br></br>
                              <div class="col-md-12">
                              <h5>More Information:</h5>
                                <input class="form-control" type="text" name="text" placeholder="More Information" required/>
                                
                            </div><br></br>
                  

                            <div class="form-button mt-3">
                                  <button id="submit" type="submit" className="btn btn-success  mr-5">My Meetings</button>
                                  <button id="submit" type="submit" className="btn btn-success " >Save</button>
                            </div> <br></br>
                            <div className="form-button">
                                <button id="submit" type="submit" className="btn btn-success">Logout</button>
                            </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
      </div>
    
  )
}
