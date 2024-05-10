'use client'

import OpenSeadragon from 'openseadragon'
import React, { useEffect, useState } from 'react'

const OpenSeadragonViewer = ({ idPrefix, iiifImageId }) => {
    const [viewer, setViewer] = useState(null)

    // Create a new OpenSeadragon viewer
    useEffect(() => {
        // This should be inside useEffect so it's updated each time the hook runs
        const viewerElement = document.getElementById(`${idPrefix}_osd-viewer`);

        // It's possible that viewer is null but the OpenSeadragon viewer already
        // exists in the container div. Do another check for child elements to
        // prevent instantiating two viewers
        if (
            iiifImageId &&
            !viewer &&
            !(viewerElement && viewerElement.childElementCount > 0)
        ) {
            setViewer(
                OpenSeadragon({
                    id: `${idPrefix}_osd-viewer`,
                    tileSources: [iiifImageId + '/info.json'],
                    prefixUrl: "//openseadragon.github.io/openseadragon/images/",
                })
            )
        }
    }, [viewer, iiifImageId])

    return (
        !!iiifImageId && (
        <div
            id={`${idPrefix}_osd-viewer`}
            className="w-full h-screen border-4 border-iiif-yellow bg-white"
        />
        )
    )
}

export default OpenSeadragonViewer