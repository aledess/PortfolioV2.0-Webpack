const contacts = `<div id="contacts" class="animated zoomIn">
<div class="contacts__item">
    <span class="lnr lnr-phone-handset"></span>
    <p>+39 348 8281172</p>
</div>
<div class="contacts__item">
    <span class="lnr lnr-inbox"></span>
    <p> <a href="mailto:alessandrodess@gmail.com">alessandrodess@gmail.com</a></p>
</div>
<div class="contacts__item">
    <span class="lnr lnr-map-marker"></span>
    <p>Cagliari, Sardinia <span><img src="img/flag-it.png" alt=""></span></p>
</div>

<div class="nav-social">
                <ul class="navbar__list">
                <li class="navbar__item"><a href="https://www.linkedin.com/in/alessandrodess/" target="_blank">
                <svg>
                    <use xlink:href="vendor/brands.svg#linkedin-in"></use>
                  </svg></a></li>
            <li class="navbar__item"><a href="https://github.com/aledess" target="_blank">
                <svg>
                    <use xlink:href="vendor/brands.svg#github"></use>
                  </svg></a></li>
            <li class="navbar__item"><a href="file/CV-AlessandroDessì.pdf" target="_blank"> <svg>
                <use xlink:href="vendor/regular.svg#file"></use>
              </svg></a></li>
                </ul>
            </div>

<img src="img/photo.png" alt="Alessandro Dessì" class="photo-bio">

</div>`;

export const renderContacts = () => {
    return contacts;
}