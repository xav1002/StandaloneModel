import * as BABYLON from "@babylonjs/core";

/**
 * should pass in hiC data, with strength, start, and end loci; should each be an object;
 * data should be preconverted
 */

function renderArcs() {
    hiCData.forEach(hiC => {
        var path = [start, end]; // start and end are preconverted averages of the start and stop loci
        hiC.arc = BABYLON.Mesh.CreateLines('arc', path, scene);
    });
    return hiCdata;
}

export default renderArcs;