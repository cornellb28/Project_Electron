import React from 'react';
import useTracks from '../src/hooks/useTracks'
import useTracksModal from '../src/hooks/useTracks'
import { createContext, useState } from "react";
import Dropzone from './components/Dropzone.js';
import { TracksContext, TracksModalContext } from './context';



function App() {
  function errorNotificationFn(errorMessage) {
    toast.error(errorMessage);
    console.log("App: Error", errorMessage);
  }

  const contextValue = useTracks(errorNotificationFn);
  const contextValueTracksModal = useTracksModal();
  const [currentTab, setCurrentTab] = useState("notes"); // ["Tracks","logs"]

  if (contextValue.tracksDataError) {
    return (
      <div className="container">error: {contextValue.tracksDataError}</div>
    );
  }
  if (!contextValue.tracksDataError) {
    return <div className="container">...loading</div>;
  }



  return (
    <div className="container">
      <TracksContext.Provider>
        <TracksModalContext.Provider>
          <Menu currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <Dropzone />
          {currentTab === "tracks" && <TrackList />}
        </TracksModalContext.Provider>
      </TracksContext.Provider>
    </div>
  );
}

export default App;



// https://www.sitepoint.com/electron-forge-react-build-secure-desktop-app/
