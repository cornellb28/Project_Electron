import { createContext } from "react";

export const TracksContext = createContext({
    tracksData: [],
    tracksDataError: "",
    createTrack: () => {},
    updateTrack: () => {},
    deleteTrack: () => {},
  });
  
  export const TracksModalContext = createContext({
    modalShow: false,
    setModalShow: () => {},
    modalTrackId: 0,
    setModalTrackId: () => {},
    modalTitle: "",
    setModalTitle: () => {},
    modalBpm: "",
    setModalBpm: () => {},
    modalYear: "",
    setModalYear: () => {},
    modalTrackTagIds: [],
    setModalTrackTagIds: () => {},
    tagNamesNewValue: "",
    setTagNamesNewValue: () => {},
  });