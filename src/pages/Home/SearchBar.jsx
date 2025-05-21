
export default function SearchBar() {
  return (
    <>




<div class="containerx">
    <div class="row pt-1 pb-1">
        <div class="col-lg-12 text-center">
            <h4 class="text-center">Carousel with Three input search</h4>
            <h6 class="text-center">awesome responsive image slider with a search bar</h6>
        </div>
    </div>
</div>
<hr></hr>
<br />

<div class="search-secx">
    <div class="containerx">
        <form action="#" method="post" novalidate="novalidate">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" class="form-control search-sltx" placeholder="Enter Key" disabled></input>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" class="form-control search-sltx" placeholder="Enter Location" disabled></input>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select class="form-control search-sltx" id="exampleFormControlSelect1">
                                <option>Select Category</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn btn-danger wrn-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

    </>
  );
}
