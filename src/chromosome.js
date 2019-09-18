import * as BABYLON from "@babylonjs/core";
import { structureData } from ".";

function renderChromosome(scene) {
    var catmull = BABYLON.Curve3.CreateCatmullRomSpline(structureData, 10, true);
    var path = catmull.getPoints();

    var chromosome = BABYLON.TubeBuilder.CreateTube('chromosome', {
        path: path,
        radius: .1,
        cap: BABYLON.Mesh.CAP_ALL
    }, scene);
}

export default renderChromosome;