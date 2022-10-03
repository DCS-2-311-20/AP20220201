//
// 応用プログラミング 第1回 課題2
//
"use strict"; // 厳格モード

import * as THREE from 'three';

// ３Ｄページ作成関数の定義
function init() {
  // シーン作成
  const scene = new THREE.Scene();

  // 座標軸の設定
  const axes = new THREE.AxesHelper(18);
  scene.add(axes);

  /* 平面の設定
  const planeGeometry = new THREE.PlaneGeometry(32, 16);
  const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x606060});
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  scene.add(plane);
  /**/

  // 箱1の表示設定

  // 箱2の表示設定

  // 箱3の表示設定

  // 光源の設定

  // カメラの設定
  const camera = new THREE.PerspectiveCamera(
    60, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.x = 25;
  camera.position.y = 15;
  camera.position.z = 30;
  camera.lookAt(0, 4, 0);

  // レンダラの設定
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x808080 );
  document.getElementById("WebGL-output")
    .appendChild(renderer.domElement);

  // 描画
  renderer.render(scene, camera);
}

document.onload = init();
