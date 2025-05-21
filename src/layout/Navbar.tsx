
export default function Navbar() {
  return (
    <>
      <title>AdminLTE 3 | Fixed Sidebar</title>
      <link rel="stylesheet" href="./plugins/fontawesome-free/css/all.min.css"></link>

      <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"></link>

      <link rel="stylesheet" href="./plugins/overlayScrollbars/css/OverlayScrollbars.min.css"></link>

      <link rel="stylesheet" href="./dist/css/adminlte.min.css"></link>

      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet"></link>



      <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
        <div class="container">
          <a href="/home" class="navbar-brand">
            <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
            ></img>
            <span class="brand-text font-weight-light">AdminLTE 3</span>
          </a>

          <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse order-3" id="navbarCollapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="/home" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="/post" class="nav-link">Post</a>
              </li>

              <li class="nav-item">
                <a href="/listings" class="nav-link">Listings</a>
              </li>
            </ul>

            <form class="form-inline ml-0 ml-md-3">
              <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"></input>
                <div class="input-group-append">
                  <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>








          <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">

            <li class="nav-item">
              <a href="/profile" class="nav-link">_Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i
                class="fas fa-sign-out-alt"></i></a>
            </li>
          </ul>




















        </div>

      </nav>






    </>
  );
}
