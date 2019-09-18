import * as BABYLON from "@babylonjs/core";
import renderChromosome from "./chromosome";

// let rawStructure = 'https://raw.githubusercontent.com/debugpoint136/chromosome-3d/master/IMR90_chr07-0-159Mb.csv';

// export let structureData = 
// export let browserData = 'https://raw.githubusercontent.com/debugpoint136/chromosome-3d/master/example.json';

/**
 * @param {Array}
 * Should be array of vector coordinates
 * Path of the spline that will define chromosome structure
 */
export let structureData = [
    new BABYLON.Vector3(0,0,0),
    new BABYLON.Vector3(0,1,0),
    new BABYLON.Vector3(1,3,0),
    new BABYLON.Vector3(2,4,6),
    new BABYLON.Vector3(-2,6-9),
    new BABYLON.Vector3(0,-5,1),
    new BABYLON.Vector3(7,-9,0),
    new BABYLON.Vector3(-1,9,5),
    new BABYLON.Vector3(8,5,2),
    new BABYLON.Vector3(-1,8,4)    
];

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas');
    canvas.style.width = Number(window.innerWidth) + 'px';
    canvas.style.height = Number(window.innerHeight) + 'px';

    let engine = new BABYLON.Engine(canvas);
    let scene = new BABYLON.Scene(engine);
    let camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 0, -20));
    camera.wheelPrecision = 5;
    camera.lowerBetaLimit = 0.1;
    camera.upperBetaLimit = (Math.PI / 2) * 0.99;
    camera.maxZ = 20000;
    camera.inputs.attached.pointers.buttons = [0];
    camera.attachControl(canvas);

    let light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    let testModel = BABYLON.MeshBuilder.CreateBox('testmodel', {
        width: 10,
        height: 10,
        depth: 10,
    });
    let material = new BABYLON.StandardMaterial('material', scene);
    material.diffuseColor = new BABYLON.Color3(1, 1, 1);
    testModel.material = material;
    testModel.position = new BABYLON.Vector3(30, 30, 30);

    renderChromosome(scene);

    engine.runRenderLoop(function() {
        if(scene) {
            scene.render();
        }
    });
    
    window.addEventListener('resize', function() {
        engine.resize();
    });
});