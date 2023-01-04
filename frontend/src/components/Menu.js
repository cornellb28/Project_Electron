import { TracksModalContext } from "../App";
import { useContext } from "react";

function Menu({ currentTab, setCurrentTab }) {
  const {
    setModalTrackId,
    setModalTrackTitle,
    setModalTrackDescription,
    setModalShow,
    setTagNamesNewValue,
    setModalTrackGenreIds,
  } = useContext(TracksModalContext);

  function createTrackFn() {
    setModalTrackId(0);
    setModalTrackTitle("");
    setModalTrackDescription("");
    setTagNamesNewValue("");
    setModalTrackGenreIds([]);
    setModalShow(true);
  }

  function TabItem({ tabValue, tabText }) {
    const tabClass =
      tabValue === currentTab
        ? "nav-link rounded-pill track-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active"
        : "nav-link rounded-pill track-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2";
    return (
      <li className="nav-item">
        <a
          href="#"
          onClick={() => {
            setCurrentTab(tabValue);
          }}
          className={tabClass}
        >
          <i className="icon-layers mr-1"></i>
          <span className="d-none d-md-block">{tabText}</span>
        </a>
      </li>
    );
  }

  function AddTrackButton() {
    return (
      <li className="nav-item ml-auto">
        <a
          href="#"
          onClick={createTrackFn}
          className="nav-link btn-primary rounded-pill d-flex align-items-center px-3"
        >
          <i className="icon-Track m-1"></i>
          <span className="d-none d-md-block font-14">Add Tracks</span>
        </a>
      </li>
    );
  }

  return (
    <ul className="nav nav-pills p-3 bg-white mb-3 founded-pill align-items-center">
      <TabItem tabValue="tracks" tabText="All Tracks" />
      <TabItem tabValue="logs" tabText="Change Logs" />
      {currentTab === "tracks" && <AddTrackButton />}
    </ul>
  );
}

export default Menu;
