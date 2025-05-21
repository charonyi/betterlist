import Header from "../../layout/Header.jsx";
import Footer from "../../layout/Footer.jsx";


function Home() {

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Product uploaded successfully");
      } else {
        console.error("Error uploading product");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <body class="hold-transition layout-top-nav">
      <div class="wrapper">
        <Header />

        <div class="content-wrapper">

          <div class="content-header">
            <div class="container">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1 class="m-0 text-dark"> Home  <small>3.0</small></h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Layout</a></li>
                    <li class="breadcrumb-item active">home</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="content">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>

                        <p class="card-text">
                          Some quick example text to build on the card title and make up the bulk of the card's
                          content.
                        </p>

                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                      </div>
                    </div>

                    <div class="card card-primary card-outline">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>

                        <p class="card-text">
                          Some quick example text to build on the card title and make up the bulk of the card's
                          content.
                        </p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="card">
                      <div class="card-header">
                        <h5 class="card-title m-0">Featured</h5>
                      </div>
                      <div class="card-body">
                        <h6 class="card-title">Special title treatment</h6>

                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>

                    <div class="card card-primary card-outline">
                      <div class="card-header">
                        <h5 class="card-title m-0">Featured</h5>
                      </div>
                      <div class="card-body">
                        <h6 class="card-title">Special title treatment</h6>

                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>










        <Footer />
      </div>
    </body>
  )
}

export default Home