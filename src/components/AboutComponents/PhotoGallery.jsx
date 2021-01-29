import React, { useState, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { photos } from "../../assets/photos"

const PhotoGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [photo, setPhoto] = useState("");
    
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);      
    }, []);                         
    
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    }

    // const barPhotos = photos.filter(p => p.category === "bar").
    //     map(photo => photo)
    
    // const restaurantPhotos = photos.filter(p => p.category === "restaurant").
    //     map(photo => photo)

    // const pleinAirPhotos = photos.filter(p => p.category === "air").
    //     map(photo => photo)

    // const eventPhotos = photos.filter(p => p.category === "event").
    //     map(photo => photo)
    
    // const kidsPhotos = photos.filter(p => p.category === "kids").
    //     map(photo => photo)

    return (
        <div>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel 
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )
}

export default PhotoGallery