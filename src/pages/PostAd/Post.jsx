import Header from "../../layout/Header.jsx";
import Footer from "../../layout/Footer.jsx";


function Post() {

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        //  setProduct({ ...product, image: e.target.files[0] });
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
                                    <h1 class="m-0 text-dark">Post&nbsp;<small>3.0</small></h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a href="#">Layout</a></li>
                                        <li class="breadcrumb-item active">post</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="container">





                            <div class="card card-default">
                                <div class="card-header">
                                    <h3 class="card-title">Products</h3>
                                </div>
                                <form onSubmit={handleSubmit} class="form-horizontal">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-6">




                                                <div class="form-group">
                                                    <label class=" control-label" for="product_id">
                                                        PRODUCT ID
                                                    </label>
                                                    <div class="">
                                                        <input
                                                            id="product_id"
                                                            name="product_id"
                                                            placeholder="PRODUCT ID"
                                                            class="form-control input-md"
                                                            required=""
                                                            onChange={handleChange}
                                                            type="text"
                                                        ></input>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class=" control-label" for="product_name">
                                                        PRODUCT NAME
                                                    </label>
                                                    <div class="">
                                                        <input
                                                            id="product_name"
                                                            name="name"

                                                            placeholder="PRODUCT NAME"
                                                            class="form-control input-md"
                                                            required=""
                                                            onChange={handleChange}
                                                            type="text"
                                                        ></input>
                                                    </div>
                                                </div>


                                                <div class="form-group">
                                                    <label class=" control-label" for="product_categorie">
                                                        PRODUCT CATEGORY
                                                    </label>
                                                    <div class="">
                                                        <select
                                                            id="product_categorie"
                                                            name="product_categorie"
                                                            class="form-control"
                                                        >
                                                            <option value="volvo">Volvo</option>
                                                            <option value="saab">Saab</option>
                                                            <option value="opel">Opel</option>
                                                            <option value="audi">Audi</option>

                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class=" control-label" for="available_quantity">
                                                        PRICE
                                                    </label>
                                                    <div class="">
                                                        <input
                                                            id="price"
                                                            name="price"
                                                            placeholder="PRICE"
                                                            class="form-control input-md"
                                                            required=""
                                                            onChange={handleChange}
                                                            type="text"
                                                        ></input>
                                                    </div>
                                                </div>

                                                {/* <br />
                                                <div class="form-group">
                                                    <label class=" control-label" for="singlebutton">
                                                        &nbsp;
                                                    </label>
                                                    <div class="">
                                                        <button
                                                            id="singlebutton"
                                                            name="singlebutton"
                                                            class="btn btn-primary"
                                                            type="submit"
                                                        >
                                                            Upload Product
                                                        </button>
                                                    </div>
                                                </div> */}

                                            </div>
                                            <div class="col-6">













                                                <div class="cardx">

                                                    <div class="card-body">


                                                        <div class="form-group">
                                                            <label class=" control-label" for="product_name_fr">
                                                                PRODUCT DESCRIPTION
                                                            </label>
                                                            <div class="">
                                                                <textarea
                                                                    id="product_name_fr"
                                                                    name="description"
                                                                    rows="3"
                                                                    placeholder="PRODUCT DESCRIPTION"
                                                                    class="form-control input-md"
                                                                    required=""
                                                                    onChange={handleChange}
                                                                    type="text"
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                        <br />

                                                        <div class="form-group">

                                                            <img class="img-fluid mb-3" src="/dist/img/photo2.png" alt="Photo"></img>

                                                        </div>
                                                        <div class="form-group">
                                                            <div class="btn btn-default btn-file">
                                                                <i class="fas fa-paperclip"></i> Attachment
                                                                <input type="file" name="attachment"></input>
                                                            </div>
                                                            <p class="help-block">Max. 32MB</p>
                                                        </div>

                                                        <button type="reset" class="btn btn-default"><i class="fas fa-times"></i> Discard</button>
                                                    </div>



                                                </div>






















                                            </div>
                                        </div>
                                    </div>

                                    <div class="card-footer">
                                       
                                        <button type="submit" class="btn btn-info float-right">Post</button>
                                    </div>

                                </form>

                            </div>








                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Listed</h3>

                                    <div class="card-tools">
                                        <ul class="pagination pagination-sm float-right">
                                            <li class="page-item"><a class="page-link" href="#">«</a></li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">»</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="card-body p-0">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th >#</th>
                                                <th>Task</th>
                                                <th>Progress</th>
                                                <th>Label</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1.</td>
                                                <td>Update software</td>
                                                <td>
                                                    <div class="progress progress-xs">
                                                        <div class="progress-bar progress-bar-danger" ></div>
                                                    </div>
                                                </td>
                                                <td><span class="badge bg-danger">55%</span></td>
                                            </tr>
                                            <tr>
                                                <td>2.</td>
                                                <td>Clean database</td>
                                                <td>
                                                    <div class="progress progress-xs">
                                                        <div class="progress-bar bg-warning" ></div>
                                                    </div>
                                                </td>
                                                <td><span class="badge bg-warning">70%</span></td>
                                            </tr>
                                            <tr>
                                                <td>3.</td>
                                                <td>Cron job running</td>
                                                <td>
                                                    <div class="progress progress-xs progress-striped active">
                                                        <div class="progress-bar bg-primary" ></div>
                                                    </div>
                                                </td>
                                                <td><span class="badge bg-primary">30%</span></td>
                                            </tr>
                                            <tr>
                                                <td>4.</td>
                                                <td>Fix and squish bugs</td>
                                                <td>
                                                    <div class="progress progress-xs progress-striped active">
                                                        <div class="progress-bar bg-success" ></div>
                                                    </div>
                                                </td>
                                                <td><span class="badge bg-success">90%</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default Post