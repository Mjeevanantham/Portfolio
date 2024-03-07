import React, { Component } from 'react';
import * as THREE from 'three';

class PacmanGame extends Component {
  componentDidMount() {
    // JavaScript code for your Pacman game
    const CUBE_SIZE = 10;
    
    // Initialize the game when the component mounts
    const { innerWidth: w, innerHeight: h } = window;
    const aspect = w / h;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(w, h);
    this.renderer.gammaInput = true;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    this.camera.position.set(14, 14, 14);
    this.clock = new THREE.Clock();
    document.getElementById('pacman-game-container').appendChild(this.renderer.domElement);

    // Create a cube and add it to the scene
    const geometry = new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    // Set up a simple animation loop
    const animate = () => {
      const delta = this.clock.getDelta();
      cube.rotation.x += 0.5 * delta;
      cube.rotation.y += 0.5 * delta;
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(animate);
    };

    animate();
  }

  render() {
    return (
      <div>
        <h1>3D Pacman Game</h1>
        <div id="pacman-game-container"></div>
      </div>
    );
  }
}

export default PacmanGame;
