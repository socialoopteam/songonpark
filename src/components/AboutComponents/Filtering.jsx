import React, { useState, useEffect, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import uuid from "react-uuid"
import "./Filtering.css"
import "bootstrap"

const images = [
    {
        src: "images/gallery/800x599/1.jpg",
        width: 4,
        height: 3,
        category: "bar"
    },
    {
        src: "images/gallery/800x799/2.jpg",
        width: 1,
        height: 1,
        category: "bar"
    },
    {
        src: "images/gallery/600x799/3.jpg",
        width: 3,
        height: 4,
        category: "restaurant"
    },
    {
        src: "images/gallery/600x799/4.jpg",
        width: 3,
        height: 4,
        category: "bar"
    },
    {
        src: "images/gallery/600x799/5.jpg",
        width: 3,
        height: 4,
        category: "plein air"
    },
    {
        src: "images/gallery/800x599/8.jpg",
        width: 4,
        height: 3,
        category: "plein air"
    },
    {
        src: "images/gallery/600x799/11.jpg",
        width: 3,
        height: 4,
        category: "plein air"
    },
    {
        src: "images/gallery/800x599/12.jpg",
        width: 4,
        height: 3,
        category: "plein air"
    },
    {
        src: "images/gallery/800x599/13.jpg",
        width: 4,
        height: 3,
        category: "events"
    },
    {
        src: "images/gallery/600x799/15.jpg",
        width: 3,
        height: 4,
        category: "plein air"
    },
    {
        src: "images/gallery/800x599/19.jpg",
        width: 1,
        height: 1,
        category: "bar"
    },
    {
        src: "images/gallery/600x799/16.jpg",
        width: 3,
        height: 4,
        category: "restaurant"
    },
    {
        src: "images/gallery/600x799/18.jpg",
        width: 3,
        height: 4,
        category: "restaurant"
    },
    {
        src: "images/gallery/800x599/20.jpg",
        width: 4,
        height: 3,
        category: "events"
    },
    {
        src: "images/gallery/800x599/22.jpg",
        width: 4,
        height: 3,
        category: "events"
    },
    {
        src: "images/gallery/800x799/6.jpg",
        width: 1,
        height: 1,
        category: "bar"
    },
    {
        src: "images/gallery/600x799/23.jpg",
        width: 3,
        height: 4,
        category: "bar"
    },
    {
        src: "images/gallery/600x799/34.jpg",
        width: 3,
        height: 4,
        category: "restaurant"
    },
    {
        src: "images/gallery/600x799/35.jpg",
        width: 3,
        height: 4,
        category: "enfants"
    },
    {
        src: "images/gallery/800x599/24.jpg",
        width: 4,
        height: 3,
        category: "enfants"
    },
    {
        src: "images/gallery/600x799/36.jpg",
        width: 3,
        height: 4,
        category: "bar"
    },
    {
        src: "images/gallery/800x599/28.jpg",
        width: 4,
        height: 3,
        category: "enfants"
    },
    {
        src: "images/gallery/800x599/31.jpg",
        width: 4,
        height: 3,
        category: "restaurant"
    }
];
  

const Filtering = () => {
    const [category, setCategory] = useState("toutes les photos")
    const [filteredImages, setFilteredImages] = useState([])
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

    useEffect(() => {
        category === "toutes les photos" ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.category === category))
    }, [category])

    const handleSetCategory = () => {

    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
                <CategoryButton name="toutes les photos" handleSetCategory={setCategory} />
                <CategoryButton name="bar" handleSetCategory={setCategory} />
                <CategoryButton name="restaurant" handleSetCategory={setCategory} />
                <CategoryButton name="plein air" handleSetCategory={setCategory} />
                <CategoryButton name="enfants" handleSetCategory={setCategory} />
                <CategoryButton name="events" handleSetCategory={setCategory} />
            </div>

            <Gallery photos={filteredImages} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel 
                            currentIndex={currentImage}
                            views={filteredImages.map(x => ({
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

const CategoryButton = ({ name, handleSetCategory }) => (
    <button className="btn btn-primary" onClick={() => handleSetCategory(name)}>
        {name.toUpperCase()}
    </button>
)

export default Filtering