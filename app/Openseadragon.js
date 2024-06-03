import OpenSeadragon from 'openseadragon'
import React, { useEffect, useRef } from 'react'

// Generate an OSD viewer for a provided artwork, and display in the relevant container
export function OpenSeadragonViewer({artworkId, idPrefix}) {
    const viewerRef = useRef(null);

    useEffect(() => {
        // Construct the manifest url 
        let manifestUrl;
        let cogappImage = /[a-zA-Z]/.test(artworkId);

        if (cogappImage) {
            manifestUrl = 'https://storiiies-images.cogapp.com/iiif/2/' + artworkId + '.ptif/info.json'
        } else {
            manifestUrl = 'https://api.artic.edu/api/v1/artworks/' + artworkId + '/manifest.json';
        }
        

        // Fetch the IIIF manifest
        fetch(manifestUrl)
        .then(response => response.json())
        .then(manifest => {
            let imageUrl;
            let tileWidth;
            let tileHeight;

            // Extract the image URL and tile information from the manifest
            if (cogappImage) {
                imageUrl = manifest["@id"] + '/full/full/0/default.jpg';
                tileWidth = manifest["tiles"][0]["width"];
                tileHeight = manifest["tiles"][0]["height"];
            } else {
                imageUrl = manifest["sequences"][0]["canvases"][0]["images"][0]["resource"]["@id"];
                tileWidth = manifest["sequences"][0]["canvases"][0]["images"][0]["resource"]["width"];
                tileHeight = manifest["sequences"][0]["canvases"][0]["images"][0]["resource"]["height"];
            }
            
            // Construct the OpenSeadragon tileSources object
            var tileSources = [{
                type: 'image',
                url: imageUrl,
                buildPyramid: false,
                tileSize: tileWidth,
                tileOverlap: 0,
                width: tileWidth,
                height: tileHeight
            }];

            // Check if viewer already exists
            if (!viewerRef.current) {
                // Create the OpenSeadragon viewer with the IIIF manifest as the tile source
                let viewer = OpenSeadragon({
                    id: idPrefix,
                    prefixUrl: '/openseadragon/images/',
                    crossOriginPolicy: 'Anonymous',
                    tileSources: tileSources
                });

                viewerRef.current = viewer;
            } else {
                // Update the tileSources of the existing viewer
                viewerRef.current.open(tileSources);
            }
        });
    }, [artworkId, idPrefix]);

    return (
        <div 
            id={idPrefix} style={{ width: "100%", height: "600px" }}
            className="w-full h-full"
        ></div>
    );
}

export default OpenSeadragonViewer