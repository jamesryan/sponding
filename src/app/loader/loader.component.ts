import { Component, OnInit } from '@angular/core';

declare var THREE: any;

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer(); //  WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
  light = new THREE.AmbientLight(0xffffff);
  // add a TorusGeometry...
  geo = new THREE.TorusGeometry( 10,3, 16, 100);
  material = new THREE.MeshBasicMaterial({color: 0x00ffff, wireframe: true});
  torus = new THREE.Mesh(this.geo, this.material);
  loader = new THREE.ColladaLoader();
  monster;
  camera;
  box;

  constructor() { }

  initScene() {
  this.renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('loader-container').appendChild(this.renderer.domElement);

  this.scene.add(this.light);

  this.camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );

  this.camera.position.set(0, 10, 100);
  // add camera to scene...
  this.scene.add(this.camera);

  this.loader.options.convertUpAxis = true;
  this.loader.load('assets/img/monster.dae', (collada) => {
    this.monster = collada.scene;
    this.scene.add(this.monster);
     this.render();
  });

  // this.box = new THREE.Mesh(
  //   new THREE.BoxGeometry(20, 20, 20),
  //   new THREE.MeshBasicMaterial({color: 0xFF0000, wireframe: true})
  // );
  // this.box.name = 'friggan box';

  // this.scene.add(this.box);
  // this.scene.add(this.torus);
 
}
render = () => {
  this.monster.rotation.y += 0.01;
    // this.box.rotation.y += 0.01;
    // this.box.rotation.x += 0.01;
    // this.torus.rotation.x += 0.01;
    // this.torus.rotation.y -= 0.01;
    // this.torus.position.x = 30;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render);
  }

// render() {
//   this.renderer.render(this.scene, this.camera);
//   requestAnimationFrame(this.render);

// }

  ngOnInit() {
    this.initScene();
  }
}
