import Openseadragon from './Openseadragon'
import ObjectButtons from './ObjectButtons.js';

export default function Home() {

return (
        <div className="container mt-10 mx-auto mb-10 p-4 bg-iiif-purple">
          <h1 className="mb-4 text-2xl font-bold text-iiif-yellow">DIIIble (IIIF Dobble)</h1>
          <p className="mb-2 text-iiif-yellow">
              <span className="font-bold">
              How to use:&nbsp;
              </span> 
              Can you find the common object in these two images? e.g. banana, bird, boat
          </p>

          <div className="flex gap-16">
            <div className="w-1/2 p-8">
              {/* <Openseadragon idPrefix={'openseadragon1'} iiifImageId={'https://free.iiifhosting.com/iiif/2eb326b21ef6910d3796061f13fa843c44c0977934c8f9b8d126574b6777b9a6'}/> */}
              <Openseadragon artworkId='94126' idPrefix='openseadragon1'/>
            </div>
            <div className="w-1/2 p-8">
              {/* <Openseadragon idPrefix={'openseadragon2'} iiifImageId={'https://free.iiifhosting.com/iiif/2eb326b21ef6910d3796061f13fa843c44c0977934c8f9b8d126574b6777b9a6'}/> */}
              <Openseadragon artworkId='27992' idPrefix='openseadragon2'/>
            </div>
          </div>  
          <ObjectButtons />      
        </div>
    );
}