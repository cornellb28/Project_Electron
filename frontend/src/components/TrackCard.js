// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import album from '../../assets/img/Reasonable_Doubt_New.jpeg';
import heartsvg from '../../assets/img/heart-svg.svg';


const TrackCard = () => {
    return (
        <div className="d-flex flex-row">
            <div className="card file-card m-3" style={{ width: "20rem" }}>
                <span className="card-bpm position-absolute d-flex flex-column"><span className="bpm-small">bpm</span>98</span>
                <div className="overflow-hidden file-card-cover position-relative">
                    <img src={album} className="card-img-top" alt="Album Cover" />
                    <div className="card-img-overlay">
                        <div className="track-info d-flex flex-row justify-content-between align-items-top">
                            <div>
                                <h5 className="card-artist">jay-z</h5>
                                <p className="card-song-title">Can't Knock the Hustle</p>
                            </div>
                            <p className="card-song-duration">4:15</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                <div className="like"><img className="heart-icon img-fluid" src={heartsvg} alt="like button" /></div>
                    <div className="featured-list d-flex justify-content-between">
                        <i>featuring:</i><span className="justify-content-around"><a href="">Foxy Brown</a><a href="">Ja Rule</a></span>
                    </div>
                    <p className="card-song-genre text-white d-flex justify-content-between">
                        <i>genre:</i>
                        <div className="genre-cards d-flex flex-wrap">
                            <span className="badge badge-pill badge-light me-1">Hip Hop</span>
                            <span className="badge badge-pill badge-light me-1">R&B</span>
                            <span className="badge badge-pill badge-light me-1">Soul</span>
                            <span className="badge badge-pill badge-light me-1">Dance</span>
                            <span className="badge badge-pill badge-light me-1">Disco</span>
                        </div>
                    </p>
                    <p className="card-song-year text-white"><i>year:</i> 1998</p>
                    <div className="float-end">
                        {/* <span className="text-white"><FontAwesomeIcon icon={faEllipsis} /></span> */}
                    </div>
                </div>
            </div>
            <div className="card file-card m-3" style={{ width: "20rem" }}>
                <span className="card-bpm position-absolute d-flex flex-column"><span className="bpm-small">bpm</span>98</span>
                <div className="overflow-hidden file-card-cover position-relative">
                    <img src={album} className="card-img-top" alt="Album Cover" />
                    <div className="card-img-overlay">
                        <div className="track-info d-flex flex-row justify-content-between align-items-top">
                            <div>
                                <h5 className="card-artist">jay-z</h5>
                                <p className="card-song-title">Can't Knock the Hustle</p>
                            </div>
                            <p className="card-song-duration">4:15</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="like"><img className="heart-icon img-fluid" src={heartsvg} alt="like button" /></div>
                    <div className="featured-list d-flex justify-content-between">
                        <i>featuring:</i><span className="justify-content-around"><a href="">Foxy Brown</a><a href="">Ja Rule</a></span>
                    </div>
                    <p className="card-song-genre text-white d-flex justify-content-between">
                        <i>genre:</i>
                        <div className="genre-cards d-flex flex-wrap">
                            <span className="badge badge-pill badge-light me-1">Hip Hop</span>
                            <span className="badge badge-pill badge-light me-1">R&B</span>
                            <span className="badge badge-pill badge-light me-1">Soul</span>
                            <span className="badge badge-pill badge-light me-1">Dance</span>
                            <span className="badge badge-pill badge-light me-1">Disco</span>
                        </div>
                    </p>
                    <p className="card-song-year text-white"><i>year:</i> 1998</p>
                    <div className="float-end">
                        {/* <span className="text-white"><FontAwesomeIcon icon={faEllipsis} /></span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackCard;