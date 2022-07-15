class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #bd0f0f !important ; margin-top: 0rem !important;">
        <div class="container-fluid d-flex justify-content-center">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                    <li style="font-size: 1rem; font-weight:bold;" class="nav-item">
                        <a class="nav-link" style="color: white ;" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li style="font-size: 1rem; font-weight:bold;" class="nav-item">
                        <a class="nav-link" style="color: white ;" href="./about-us.html">About Us</a>
                    </li>
                    <li class="nav-item dropdown" style="font-size: 1rem; font-weight:bold;">
                        <a class="nav-link dropdown-toggle" style="color: white ;" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Services
                        </a>
                        <ul class="dropdown-menu" style="background-color:#bd0f0f;" aria-labelledby="navbarDropdown">
                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="opd.html">Out-Patients services</a></li>
                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="casulity-emergency.html">Casuality & Emergency Services</a></li>
                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="laboratory.html">Laboratory</a></li>
                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="Radiology.html">Radiology</a></li>

                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="ics.html">Intensive Care Services</a></li>
                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="kitchen.html">kitchen</a></li>

                        </ul>
                    </li>
                    <li class="nav-item dropdown" style="font-size: 1rem; font-weight:bold;">
                        <a class="nav-link dropdown-toggle" style="color: white ;" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Departments
                        </a>
                        <ul class="dropdown-menu" style="background-color:#bd0f0f;" aria-labelledby="navbarDropdown">
                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="Anesthesia.html">Anesthesia</a></li>
                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="Broncoscopy.html">Broncoscopy</a></li>
                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="Burns.html">Burns</a></li>
                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="cardiacCareuntis.html">Cardiac Care untis</a></li>
                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="cardiacmergency.html">Cardiac Emergency</a></li>
                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="cardiology.html">Cardiology</a></li>
                            <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="chestmedicines.html">Chest Medicines</a></li>
                            <li>


                        </ul>
                        </li>
                        <li class="nav-item dropdown" style="font-size: 1rem; font-weight:bold;">
                            <a class="nav-link dropdown-toggle" style="color: white ;" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Reports
                        </a>
                            <ul class="dropdown-menu" style="background-color:#bd0f0f;" aria-labelledby="navbarDropdown">
                                <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="patients.html">Patients</a></li>
                                <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="pathology.html">Pathology</a></li>
                                <li style="font-size: 1rem; font-weight:bold;"><a class="dropdown-item" style="color: white ;" href="radiology-reports.html">Radiology</a></li>
                                <li>


                            </ul>
                            </li>
                            <li style="font-size: 1rem; font-weight:bold;" class="nav-item">
                                <a class="nav-link " style="color: white ;" href="gallery.html" tabindex="-1" aria-disabled="true">Gallery</a>
                            </li>
                            <li class="nav-item" style="font-size: 1rem; font-weight:bold;">
                                <a class="nav-link " style="color: white ;" href="messages.html" tabindex="-1" aria-disabled="true">Messages</a>
                            </li>
                            <li class="nav-item" style="font-size: 1rem; font-weight:bold;">
                                <a class="nav-link " style="color: white ;" href="news.html" tabindex="-1" aria-disabled="true">News & Events</a>
                            </li>
                            <li class="nav-item" style="font-size: 1rem; font-weight:bold;">
                                <a class="nav-link " style="color: white ;" href="contact.html" tabindex="-1" aria-disabled="true">Contact Us</a>
                            </li>

                </ul>

            </div>
        </div>
    </nav>
        `
    }
}
customElements.define('app-navbar', NavBar)