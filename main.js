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
  
