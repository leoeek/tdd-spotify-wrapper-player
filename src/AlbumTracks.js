import { convertToHumanTimes } from './ConvertToHumanTimes'

const createMarkup = (tracks) => {
  return tracks.map(track => `
    <div class="music" data-track-preview="${track.preview_url}">
      <p class="music-number">${track.track_number}</p>
      <p class="music-title">${track.name}</p>
      <p class="music-duration">${convertToHumanTimes(track.duration_ms)}</p>
    </div>`).join('');
}

export const renderAlbumTracks = (data, element) => {
  const markup = createMarkup(data);
  element.innerHTML = markup;
}
