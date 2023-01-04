import useGeneralizedCrudMethods from "../useGeneralizedCrudMethods";
import { v4 as uuidv4 } from "uuid";

function useEntityTrackOnGenres(url, errorNotificationFn) {
  const { data, error, createRecord, deleteRecord } = useGeneralizedCrudMethods(
    url,
    errorNotificationFn
  );


  function updateTrackGenres(genreIdsToSet, trackId) {
    if (!genreIdsToSet || !trackId) { return; }

    const genreIdsOnTrack = data
      .filter((rec) => rec.trackId === trackId)
      .map((rec) => rec.genreId);

    const genreIdsToAdd = genreIdsToSet.filter(
      (genreId) => !genreIdsOnTrack.includes(genreId)
    );

    const genreIdsToDelete = genreIdsOnTrack.filter(
      (genreId) => !genreIdsToSet.includes(genreId)
    );

    genreIdsToAdd.forEach((genreId) => {
      createRecord({
        id: uuidv4(),
        trackId,
        genreId,
        createdAt: new Date().toISOString(),
      });
    });
    const trackOnGenreRecIdsToDelete = data
      .filter(
        (rec) => rec.trackId === trackId && genreIdsToDelete.includes(rec.genreId)
      )
      .map((rec) => rec.id);
      trackOnGenreRecIdsToDelete.forEach((id) => deleteRecord(id));
  }

  function deleteTrackOnGenresByTrackId(trackId) {
    data.forEach((rec) => {
      if (rec.noteId === noteId) {
        deleteRecord(rec.id);
      }
    });
  }
  return { data, error, updateTrackGenres, deleteTrackOnGenresByTrackId };
}

export default useEntityTrackOnGenres;