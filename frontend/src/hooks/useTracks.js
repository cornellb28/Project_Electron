import useEntityTracks from "./entityMethods/useEntityTracks";
import useEntityTrackAttributes from "./entityMethods/useEntityTrackAttributes";
// import useEntityTrackChangeLogs from "./entityMethods/useEntityTrackChangeLogs";
import useEntityGenres from "./entityMethods/useEntityGenres";
import useEntityTrackOnGenres from "./entityMethods/useEntityTrackToGenres";

function useTracks(errorNotificationFn) {
  const {
    data: tracksData,
    error: tracksDataError,
    createTrackEntity,
    updateTrackEntity,
    deleteTrackEntity,
  } = useEntityTracks("http://localhost:5000/api/tracks", errorNotificationFn);

  const {
    data: trackAttributesData,
    error: trackAttributesDataError,
    updateTrackAttributesEntity,
    deleteTrackAttributesEntity,
  } = useEntityTrackAttributes("/api/trackAttributes", errorNotificationFn);

  const {
    data: genresData,
    error: genresDataError,
    createGenresAndMerge,
  } = useEntityGenres("/api/genres", errorNotificationFn);

  const {
    data: trackOnGenresData,
    error: trackOnGenresDataError,
    updateTrackGenres,
    deleteTrackOnGenresByTrackId,
  } = useEntityTrackOnGenres("/api/trackOnGenres", errorNotificationFn);

  function createTrack(title, description, tagIdsIn, tagNamesIn) {
    // could create Id trackId here and pass in to createTrackEntity as alternative
    const trackId = createTrackEntity(title, description);
    createTrackChangeLogsEntity(trackId, "CREATE");
    const tagIds = createTagsAndMerge(tagIdsIn, tagNamesIn);
    updateTrackTags(tagIds, trackId);
  }

  function updateTrack(
    id,
    title,
    description,
    pinned,
    important,
    genreIdsIn,
    genreNamesIn
  ) {
    updateTrackEntity(id, title, description);
    updateTrackAttributesEntity(id, pinned, important);
    createTrackChangeLogsEntity(id, "UPDATE");
    const genreIds = createGenresAndMerge(genreIdsIn, genreNamesIn);
    updateTrackTags(genreIds, id);
  }

  function deleteTrack(id) {
    deleteTrackEntity(id);
    deleteTrackAttributesEntity(id);
    deleteTrackOnTagsByTrackId(id);
  }

  return {
    tracksData,
    tracksDataError,
    trackAttributesData,
    trackAttributesDataError,
    genresData,
    genresDataError,
    trackOnGenresData,
    trackOnGenresDataError,
    createTrack,
    updateTrack,
    deleteTrack,
  };
}

export default useTracks;
