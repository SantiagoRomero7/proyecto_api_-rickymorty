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

