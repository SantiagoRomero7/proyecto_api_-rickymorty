const API_BASE = 'https://rickandmortyapi.com/api';

const charactersSection = document.getElementById('characters-section');
const episodesSection = document.getElementById('episodes-section');
const locationsSection = document.getElementById('locations-section');

const charactersContainer = document.getElementById('characters-container');
const charactersPagination = document.getElementById('characters-pagination');

const episodesContainer = document.getElementById('episodes-container');
const episodesPagination = document.getElementById('episodes-pagination');

const locationsContainer = document.getElementById('locations-container');
const locationsPagination = document.getElementById('locations-pagination');

const modal = document.getElementById('modal');
const modalContent = modal?.querySelector('.modal-content');

let currentPageCharacters = 1;
let totalPagesCharacters = 1;
let currentPageEpisodes = 1;
let totalPagesEpisodes = 1;
let currentPageLocations = 1;
let totalPagesLocations = 1;

document.addEventListener('DOMContentLoaded', () => {
  const startScreen = document.getElementById('start-screen');
  const introScreen = document.getElementById('intro-screen');

  document.getElementById('enter-button')?.addEventListener('click', () => {
    startScreen.classList.add('fade-out');

    setTimeout(() => {
      startScreen.style.display = 'none';
      introScreen.style.display = 'block';
    }, 1000);
  });

  document.getElementById('btn-characters')?.addEventListener('click', () => showSection('characters'));
  document.getElementById('btn-episodes')?.addEventListener('click', () => showSection('episodes'));
  document.getElementById('btn-locations')?.addEventListener('click', () => showSection('locations'));
});

function showSection(section) {
  charactersSection.style.display = 'none';
  episodesSection.style.display = 'none';
  locationsSection.style.display = 'none';

  if (section === 'characters') {
    charactersSection.style.display = 'block';
    fetchCharacters(currentPageCharacters);
  } else if (section === 'episodes') {
    episodesSection.style.display = 'block';
    fetchEpisodes(currentPageEpisodes);
  } else if (section === 'locations') {
    locationsSection.style.display = 'block';
    fetchLocations(currentPageLocations);
  }
}

async function fetchCharacters(page = 1) {
  charactersContainer.innerHTML = 'Cargando personajes...';
  try {
    const res = await fetch(`${API_BASE}/character?page=${page}`);
    const data = await res.json();
    totalPagesCharacters = data.info.pages;
    currentPageCharacters = page;
    displayCharacters(data.results);
    createPagination(totalPagesCharacters, currentPageCharacters, charactersPagination, fetchCharacters);
  } catch (e) {
    charactersContainer.innerHTML = 'Error al cargar personajes';
    console.error(e);
  }
}

function displayCharacters(characters) {
  charactersContainer.innerHTML = '';
  characters.forEach(char => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}" />
      <div class="card-content">
        <h3>${char.name}</h3>
        <p>Estado: ${char.status}</p>
        <p>Especie: ${char.species}</p>
      </div>
    `;
    card.addEventListener('click', () => openCharacterModal(char));
    charactersContainer.appendChild(card);
  });
}

function openCharacterModal(char) {
  if (!modal || !modalContent) return;
  const content = `
    <h2>${char.name}</h2>
    <img src="${char.image}" alt="${char.name}" style="width: 100%; max-width: 300px;" />
    <p><strong>Estado:</strong> ${char.status}</p>
    <p><strong>Especie:</strong> ${char.species}</p>
    <p><strong>Tipo:</strong> ${char.type || 'Desconocido'}</p>
    <p><strong>Género:</strong> ${char.gender}</p>
    <p><strong>Origen:</strong> ${char.origin.name}</p>
    <p><strong>Ubicación actual:</strong> ${char.location.name}</p>
    <p><strong>Episodios:</strong> ${char.episode.length}</p>
    <button id="close-modal-btn">Cerrar</button>
  `;
  openModal(content);
}

function openModal(content) {
  if (!modal || !modalContent) return;

  modalContent.innerHTML = content;
  modal.style.display = 'block';

  const closeButton = document.getElementById('close-modal-btn');
  closeButton?.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
  
  async function fetchEpisodes(page = 1) {
    episodesContainer.innerHTML = 'Cargando episodios...';
    try {
      const res = await fetch(`${API_BASE}/episode?page=${page}`);
      const data = await res.json();
      totalPagesEpisodes = data.info.pages;
      currentPageEpisodes = page;
      displayEpisodes(data.results);
      createPagination(totalPagesEpisodes, currentPageEpisodes, episodesPagination, fetchEpisodes);
    } catch (e) {
      episodesContainer.innerHTML = 'Error al cargar episodios';
      console.error(e);
    }
  }
  
  function displayEpisodes(episodes) {
    episodesContainer.innerHTML = '';
    episodes.forEach(ep => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="card-content">
          <h3>${ep.name}</h3>
          <p>Código: ${ep.episode}</p>
          <p>Emitido: ${ep.air_date}</p>
        </div>
      `;
      card.addEventListener('click', () => openEpisodeModal(ep));
      episodesContainer.appendChild(card);
    });
  }
  
  function openEpisodeModal(ep) {
    if (!modal || !modalContent) return;
    const content = `
      <h2>${ep.name}</h2>
      <p><strong>Código:</strong> ${ep.episode}</p>
      <p><strong>Fecha:</strong> ${ep.air_date}</p>
      <p><strong>Personajes:</strong> ${ep.characters.length}</p>
      <button id="close-modal-btn">Cerrar</button>
    `;
    openModal(content);
  }
  
  async function fetchLocations(page = 1) {
    locationsContainer.innerHTML = 'Cargando locaciones...';
    try {
      const res = await fetch(`${API_BASE}/location?page=${page}`);
      const data = await res.json();
      totalPagesLocations = data.info.pages;
      currentPageLocations = page;
      displayLocations(data.results);
      createPagination(totalPagesLocations, currentPageLocations, locationsPagination, fetchLocations);
    } catch (e) {
      locationsContainer.innerHTML = 'Error al cargar locaciones';
      console.error(e);
    }
  }
  
  function displayLocations(locations) {
    locationsContainer.innerHTML = '';
    locations.forEach(loc => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="card-content">
          <h3>${loc.name}</h3>
          <p>Tipo: ${loc.type}</p>
          <p>Dimensión: ${loc.dimension}</p>
        </div>
      `;
      card.addEventListener('click', () => openLocationModal(loc));
      locationsContainer.appendChild(card);
    });
  }
  
  function openLocationModal(loc) {
    if (!modal || !modalContent) return;
    const content = `
      <h2>${loc.name}</h2>
      <p><strong>Tipo:</strong> ${loc.type}</p>
      <p><strong>Dimensión:</strong> ${loc.dimension}</p>
      <p><strong>Residentes:</strong> ${loc.residents.length}</p>
      <button id="close-modal-btn">Cerrar</button>
    `;
    openModal(content);
  }
  
  function createPagination(total, current, container, callback) {
    container.innerHTML = '';
    const maxButtons = 5;
    let start = Math.max(1, current - Math.floor(maxButtons / 2));
    let end = Math.min(total, start + maxButtons - 1);
    if (end - start < maxButtons - 1) start = Math.max(1, end - maxButtons + 1);
  
    const prev = document.createElement('button');
    prev.textContent = '‹';
    prev.disabled = current === 1;
    prev.onclick = () => callback(current - 1);
    container.appendChild(prev);
  
    for (let i = start; i <= end; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      if (i === current) btn.classList.add('active');
      btn.onclick = () => callback(i);
      container.appendChild(btn);
    }
  
    const next = document.createElement('button');
    next.textContent = '›';
    next.disabled = current === total;
    next.onclick = () => callback(current + 1);
    container.appendChild(next);
  }


  document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const mainContent = document.getElementById('main-content');
  
    document.getElementById('enter-button')?.addEventListener('click', () => {
      startScreen.classList.add('fade-out'); 
  
      setTimeout(() => {
        startScreen.style.display = 'none'; 
        mainContent.style.display = 'block'; 
        showSection('characters'); 
      }, 1000); 
    });
  
    document.getElementById('btn-characters')?.addEventListener('click', () => showSection('characters'));
    document.getElementById('btn-episodes')?.addEventListener('click', () => showSection('episodes'));
    document.getElementById('btn-locations')?.addEventListener('click', () => showSection('locations'));
  });
  
  function showSection(section) {
    charactersSection.style.display = 'none';
    episodesSection.style.display = 'none';
    locationsSection.style.display = 'none';
  
    if (section === 'characters') {
      charactersSection.style.display = 'block';
      fetchCharacters(currentPageCharacters);
    } else if (section === 'episodes') {
      episodesSection.style.display = 'block';
      fetchEpisodes(currentPageEpisodes);
    } else if (section === 'locations') {
      locationsSection.style.display = 'block';
      fetchLocations(currentPageLocations);
    }
  }
  function openCharacterModal(char) {
    if (!modal || !modalContent) return;
    const content = `
      <h2>${char.name}</h2>
      <img src="${char.image}" alt="${char.name}" style="width: 100%; max-width: 300px;" />
      <p><strong>Estado:</strong> ${char.status}</p>
      <p><strong>Especie:</strong> ${char.species}</p>
      <p><strong>Tipo:</strong> ${char.type || 'Desconocido'}</p>
      <p><strong>Género:</strong> ${char.gender}</p>
      <p><strong>Origen:</strong> ${char.origin.name}</p>
      <p><strong>Ubicación actual:</strong> ${char.location.name}</p>
      <p><strong>Episodios:</strong> ${char.episode.length}</p>
    `;
    openModal(content);
  }

  function openEpisodeModal(ep) {
    if (!modal || !modalContent) return;
    const content = `
      <h2>${ep.name}</h2>
      <p><strong>Código:</strong> ${ep.episode}</p>
      <p><strong>Fecha:</strong> ${ep.air_date}</p>
      <p><strong>Personajes:</strong> ${ep.characters.length}</p>
    `;
    openModal(content);
  }

  function openLocationModal(loc) {
    if (!modal || !modalContent) return;
    const content = `
      <h2>${loc.name}</h2>
      <p><strong>Tipo:</strong> ${loc.type}</p>
      <p><strong>Dimensión:</strong> ${loc.dimension}</p>
      <p><strong>Residentes:</strong> ${loc.residents.length}</p>
    `;
    openModal(content);
  }

  document.getElementById('close-modal-button').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  });


document.getElementById('search-button').addEventListener('click', () => {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  if (!query) return;

 
  fetch(`${API_BASE}/character/?name=${query}`)
    .then(res => res.json())
    .then(data => {
      if (data.results) {
        charactersSection.style.display = 'block';
        episodesSection.style.display = 'none';
        locationsSection.style.display = 'none';
        displayCharacters(data.results);
      } else {
        alert('No se encontraron personajes con ese nombre.');
      }
    })
    .catch(err => console.error('Error al buscar personajes:', err));


  fetch(`${API_BASE}/episode/?name=${query}`)
    .then(res => res.json())
    .then(data => {
      if (data.results) {
        charactersSection.style.display = 'none';
        episodesSection.style.display = 'block';
        locationsSection.style.display = 'none';
        displayEpisodes(data.results);
      } else {
        console.log('No se encontraron episodios con ese nombre.');
      }
    })
    .catch(err => console.error('Error al buscar episodios:', err));

 
  fetch(`${API_BASE}/location/?name=${query}`)
    .then(res => res.json())
    .then(data => {
      if (data.results) {
        charactersSection.style.display = 'none';
        episodesSection.style.display = 'none';
        locationsSection.style.display = 'block';
        displayLocations(data.results);
      } else {
        console.log('No se encontraron ubicaciones con ese nombre.');
      }
    })
    .catch(err => console.error('Error al buscar ubicaciones:', err));
});
  