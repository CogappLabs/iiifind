'use client'

import OpenSeadragon from 'openseadragon'
import React, { useEffect, useRef } from 'react'

// Generate an OSD viewer for a provided artwork, and display in the relevant container
export function OpenSeadragonViewer({artworkId, idPrefix}) {
    const viewerRef = useRef(null);

    useEffect(() => {
        // Construct the manifest url 
        let manifestUrl = 'https://api.artic.edu/api/v1/artworks/' + artworkId + '/manifest.json';

        // Fetch the IIIF manifest
        fetch(manifestUrl)
        .then(response => response.json())
        .then(manifest => {
            // Extract the image URL and tile information from the manifest
            var imageUrl = manifest["sequences"][0]["canvases"][0]["images"][0]["resource"]["@id"];
            var tileWidth = manifest["sequences"][0]["canvases"][0]["images"][0]["resource"]["width"];
            var tileHeight = manifest["sequences"][0]["canvases"][0]["images"][0]["resource"]["height"];
            
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
            className="w-full h-screen border-4 border-iiif-yellow bg-white"
        ></div>
    );
}
// export function OpenSeadragonViewer({artworkId, idPrefix}) {
//     console.log(artworkId);
//     console.log(idPrefix);

//     // Construct the manifest url 
//     let manifestUrl = 'https://api.artic.edu/api/v1/artworks/' + artworkId + '/manifest.json';

//     console.log(manifestUrl);

//     // Fetch the IIIF manifest
//     fetch(manifestUrl)
//     .then(response => response.json())
//     .then(manifest => {
//         // Extract the image URL and tile information from the manifest
//         var imageUrl = manifest["sequences"][0]["canvases"][0]["images"][0]["resource"]["@id"];
//         var tileWidth = manifest["sequences"][0]["canvases"][0]["images"][0]["resource"]["width"];
//         var tileHeight = manifest["sequences"][0]["canvases"][0]["images"][0]["resource"]["height"];
        
//         // Construct the OpenSeadragon tileSources object
//         var tileSources = [{
//             type: 'image',
//             url: imageUrl,
//             buildPyramid: false,
//             tileSize: tileWidth,
//             tileOverlap: 0,
//             width: tileWidth,
//             height: tileHeight
//         }];

//         // Create the OpenSeadragon viewer with the IIIF manifest as the tile source
//         let viewer = OpenSeadragon({
//             id: idPrefix,
//             prefixUrl: '/openseadragon/images/',
//             crossOriginPolicy: 'Anonymous',
//             showSequenceControl: false,
//             showHomeControl: false,
//             showZoomControl: false,
//             showFullPageControl: false,
//             visibilityRatio: 0.3,
//             homeFillsViewer: false,
//             autoHideControls: true,
//             showNavigator: true,
//             navigatorPosition: 'TOP_LEFT',
//             navigatorAutoFade: true,
//             tileSources: tileSources
//         });

//         console.log(viewer);

//         return viewer;
//     })
//     .catch(error => console.error(error));

// }

// const OpenSeadragonViewer = ({ idPrefix, iiifImageId }) => {
//     const [viewer, setViewer] = useState(null)

//     // Create a new OpenSeadragon viewer
//     useEffect(() => {
//         // This should be inside useEffect so it's updated each time the hook runs
//         const viewerElement = document.getElementById(`${idPrefix}_osd-viewer`);

//         // It's possible that viewer is null but the OpenSeadragon viewer already
//         // exists in the container div. Do another check for child elements to
//         // prevent instantiating two viewers
//         if (
//             iiifImageId &&
//             !viewer &&
//             !(viewerElement && viewerElement.childElementCount > 0)
//         ) {
//             setViewer(
//                 OpenSeadragon({
//                     id: `${idPrefix}_osd-viewer`,
//                     tileSources: [iiifImageId + '/info.json'],
//                     prefixUrl: "//openseadragon.github.io/openseadragon/images/",
//                 })
//             )
//         }
//     }, [viewer, iiifImageId])

//     return (
//         !!iiifImageId && (
//         <div
//             id={`${idPrefix}_osd-viewer`}
//             className="w-full h-screen border-4 border-iiif-yellow bg-white"
//         />
//         )
//     )
// }

export default OpenSeadragonViewer