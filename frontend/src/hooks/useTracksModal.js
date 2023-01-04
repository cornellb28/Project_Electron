import { useState } from "react";

function useTracksModal() {
  const [modalShow, setModalShow] = useState(false);

  const [modalNoteId, setModalNoteId] = useState(0);
  const [modalNoteTitle, setModalNoteTitle] = useState("");
  const [modalNoteDescription, setModalNoteDescription] = useState("");
  const [tagNamesNewValue, setTagNamesNewValue] = useState("");
  const [modalNoteTagIds, setModalNoteTagIds] = useState([]);

  return {
    modalShow,
    setModalShow,

    modalNoteId,
    setModalNoteId,
    modalNoteTitle,
    setModalNoteTitle,
    modalNoteDescription,
    setModalNoteDescription,
    tagNamesNewValue,
    setTagNamesNewValue,
    modalNoteTagIds,
    setModalNoteTagIds,
  };
}

export default useTracksModal;
