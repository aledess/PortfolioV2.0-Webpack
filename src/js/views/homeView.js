const home = `
<div id="home" class="animated zoomIn">
    <div class="text-zone">
        <h1 class="home__title animated heartBeat delay-2s">
            <span>I'm <span class="first-letter">A</span>lessandro,</span>
            <span>web developer.</span>
        </h1>
        <span class="home__subtitle">Front End Developer | Web Designer</span>

        <a href="#contacts" class="home__btn">Contact Me</a>
    </div>
    <div class="logo-large">
        <img src="img/logo-large.png" alt="logo">
    </div>
</div>`;

export const renderHome = () => {
    return home;
}