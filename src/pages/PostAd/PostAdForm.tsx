import React, { useState } from "react";
import Home from "../Home/Home.jsx";

function PostAdForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
     price: 0,
    image: null
  });

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

    <>

   <Home />

    <form onSubmit={handleSubmit} class="form-horizontal">
      <legend>PRODUCTS</legend>
      

      <div class="form-group">
        <label class="col-md-4 control-label" for="product_id">
          PRODUCT ID
        </label>
        <div class="col-md-4">
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
        <label class="col-md-4 control-label" for="product_name">
          PRODUCT NAME
        </label>
        <div class="col-md-4">
          <input
            id="product_name"
            name="name"
            value={product.name}
            placeholder="PRODUCT NAME"
            class="form-control input-md"
            required=""
            onChange={handleChange}
            type="text"
          ></input>
        </div>
      </div>

      <div class="form-group">
        <label class="col-md-4 control-label" for="product_name_fr">
          PRODUCT DESCRIPTION
        </label>
        <div class="col-md-4">
          <input
            id="product_name_fr"
            name="description"
            value={product.description}
            placeholder="PRODUCT DESCRIPTION"
            class="form-control input-md"
            required=""
            onChange={handleChange}
            type="text"
          ></input>
        </div>
      </div>

      <div class="form-group">
        <label class="col-md-4 control-label" for="product_categorie">
          PRODUCT CATEGORY
        </label>
        <div class="col-md-4">
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
        <label class="col-md-4 control-label" for="available_quantity">
          PRICE
        </label>
        <div class="col-md-4">
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

      <br />
      <div class="form-group">
        <label class="col-md-4 control-label" for="singlebutton">
          &nbsp;
        </label>
        <div class="col-md-4">
          <button
            id="singlebutton"
            name="singlebutton"
            class="btn btn-primary"
            type="submit"
          >
            Upload Product
          </button>
        </div>
      </div>
    </form>


    
     </>
  );
}

export default PostAdForm;