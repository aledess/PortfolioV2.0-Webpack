const descriptions = [
  {
    language: "it",
    text: ` <strong>Sono uno Sviluppatore Web Frontend</strong> junior orientato al
        <strong>Web Design</strong>. Dopo il mio diploma come perito informatico, ho coltivato la mia passione
        per la programmazione seguendo tutorial, corsi online e non. L'interesse per le
        <strong>tecnologie lato client</strong> mi ha guidato durante gli ultimi anni. Per
        il resto, amo gli animali, in particolare il mio cane Artù.`
  },
  {
    language: "en",
    text: ` I'm a junior <strong>Front-End Web Developer</strong> focusing on <strong>Web
        Design</strong>. After my graduation as IT Expert, I have kept my knowledge fresh following several courses online
    and off. I have been focusing on <strong>Web Development and Front-end
        Development</strong>. My passion for <strong>client-facing technologies</strong>
    have driven me during the last years. I love animals too, particularly
    my dog, Artù.`
  }
];

export const renderAbout = () => {
  let markup = "";
  descriptions.forEach(item => {
    markup =
      markup +
      `
        <div class="${item.language}-description">
          
          <div class="description-text">
            <p class="description">
          <img src="img/flag-${item.language}.png" class="flag flag--${item.language}"alt="Bandiera lingua ${item.language}">

              ${item.text}
            </p>
          </div>
        </div>
`;
  });
  markup = `
  
  <div id="about" class="animated zoomIn">
  <h1 class="heading">About me</h1>

    <div class="about__bio">
    <img src="img/photo.png" alt="Alessandro Dessì" class="photo-bio">
      <div class="descriptions">
        ${markup}
      </div>
    </div>
  </div> 
  
  `;
  return markup;
};
