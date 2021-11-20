import React, { memo, useState } from "react";
import Button from "../Button";

function PhotoGallery(props) {

    const { photos } = props;
    const [ gallery, setGallery ] = useState(photos);

    const handleRemoverPhotoClick = (key) => {
        const newGallery = gallery.filter( (photo, index) => index !== key );
        setGallery(newGallery);
        console.log("REMOVENDO IMAGEM");
    }
    
    const renderPhotos = (photo, key) => {
        return (
            <>
            <div>
                <img src={photo} />
                <Button onClick={ () => handleRemoverPhotoClick(key) }> Remover {key} </Button>
            </div>
            </>
        );
    }

    return(
        <React.Fragment>
            { gallery.map(renderPhotos) }
        </React.Fragment>
    );
}

export default memo(PhotoGallery);