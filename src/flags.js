import * as BABYLON from "@babylonjs/core";
import {
    splinePath
} from "./chromosome";

/**
 * 
 * @param {Object} scene
 * Flag data passed into function should be array of flag objects, with signal strength, start, and end loci;
 * data should be preconverted
 */

function renderFlags() {
    flagData.forEach(flag => {
        var flagPath;        
        
        if(Math.abs(flag.locus.start - flag.locus.end) !== 0) {
            flagPath = [splinePath[flag.locus.start], splinePath[flag.locus.end]];
        } else if(Math.abs(flag.locus.start - flag.locus.end) === 0) {
            flagPath = [splinePath[flag.locus.start], splinePath[flag.locus.start - 1]];
        }

        flag.mesh = BABYLON.MeshBuilder.CreateTube('flag', {
            path: path,
            radius: flag.value,
            cap: BABYLON.Mesh.CAP_ALL
        });

        var flagMaterial = new BABYLON.StandardMaterial('flagmaterial');
        flagMaterial.diffuseColor = new BABYLON.Color4(40 / viewedFlags[i].value, 0.5, viewedFlags[i].value / 100);
        viewedFlags[i].mesh.material = flagMaterial;
        flags.push(viewedFlags[i].mesh);
    });
    return flagData;
}

export default renderFlags;