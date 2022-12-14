import React from "react";

const Footer = ()=>{
    return(
        <div>
        <footer class="footer text-center">
        <div class="container">
            <div class="row">
               
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h4 class="text-uppercase mb-4">Location</h4>
                    <p class="lead mb-0">
                        #71 Radhakrishnan
                        <br />
                        Banglore, 560027
                    </p>
                </div>
               

                <div class="col-lg-4 mb-5 mb-lg-0">
                <h4 class="text-uppercase mb-4">Around the Web</h4>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/radha-krishnan-82a87517a/"><i class="fab fa-fw fa-linkedin-in"></i></a>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
            </div>

            <div class="col-lg-4">
            <h4 class="text-uppercase mb-4">About Me</h4>
            <p class="lead mb-0">
               I am a foodie , traveller and web developer 
            </p>
        </div>


            </div>
            </div>
                </footer>

                <div class="copyright py-4 text-center text-white">
                <div class="container"><small>Copyright &copy; RK's Website 2022</small></div>
            </div>

            </div>

    )
}

export default Footer;