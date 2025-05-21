import Header from "../../layout/Header.jsx";
import Footer from "../../layout/Footer.jsx";
import Paypal from "../../pages/Payment/Paypal.tsx";


function Wallet() {

 

  return (
    <body class="hold-transition layout-top-nav">
      <div class="wrapper">
        <Header />

        <div class="content-wrapper">

          <div class="content-header">
            <div class="container">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1 class="m-0 text-dark"> Wallet &nbsp; <small>3.0</small></h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Layout</a></li>
                    <li class="breadcrumb-item active">wallet</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="content">
              <div class="container">

           


    <Paypal />
 


              </div>
            </div>
    
          </div> 
    

        </div>










        <Footer />
      </div>
    </body>
  )
}

export default Wallet