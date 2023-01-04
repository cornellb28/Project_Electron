import TracksModalHeader from "./TracksModalHeader";
import TracksModalBody from "./TracksModalBody";
import TracksModalFooter from "./TracksModalFooter";
import { TracksModalContext } from "../../App";
import { useContext } from "react";
import TracksModalGenres from "./TracksModalGenres";

function TracksModal() {
  const { modalShow } = useContext(TracksModalContext);
  const cssShowHide =
    modalShow && modalShow === true ? "modal show-modal" : "modal hide-modal";

  return (
    <>
      <style jsx>
        {`
          .show-modal {
            display: block;
          }
          .hide-modal {
            display: none;
          }
        `}
      </style>
      <div role="dialog" className={cssShowHide}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <TracksModalHeader />
            <TracksModalBody />
            <TracksModalTags />
            <TracksModalFooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default TracksModal;