import { v4 as uuidv4 } from "uuid";
import useGeneralizedCrudMethods from "../useGeneralizedCrudMethods";

function useEntityTrackAttributes(url, errorNotificationFn) {
  const { data, error, createRecord, updateRecord, deleteRecord } =
    useGeneralizedCrudMethods(url, errorNotificationFn);

  function updateTrackAttributesEntity(trackId, pinned, important) {
    const trackAttributes = data.find((rec) => rec.trackId === trackId);
    if (trackAttributes) {
      updateRecord(trackAttributes.id, {
        pinned: pinned === undefined ? undefined : Number(pinned),
        important: important === undefined ? undefined : Number(important),
        updateDate: new Date().toISOString(),
      });
    } else {
      createRecord({
        id: uuidv4(),
        trackId: trackId,
        pinned: pinned === undefined ? undefined : Number(pinned),
        important: important === undefined ? undefined : Number(important),
        updateDate: new Date().toISOString(),
      });
    }
  }

  function deleteTrackAttributesEntity(id) {
    data
      .filter((rec) => rec.trackId === id)
      .forEach((rec) => deleteRecord(rec.id));
  }

  return {
    data,
    error,
    updateTrackAttributesEntity,
    deleteTrackAttributesEntity,
  };
}

export default useEntityTrackAttributes;