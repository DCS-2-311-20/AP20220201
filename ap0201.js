//
// 応用プログラミング 第2回 課題1
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

  // 箱1の表示設定
  const box1 = new THREE.Mesh(
    new THREE.BoxGeometry(10, 2, 10),
    new THREE.MeshBasicMaterial({color: "lightblue"})
  );
  scene.add(box);

  // 箱2の表示設定 (色は"yellowgreen")

  // 箱3の表示設定 (色は"orangered")

  // 光源の設定

  // カメラの設定
  const camera = new THREE.PerspectiveCamera(
    60, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.x = 25;
  camera.position.y = 5;
  camera.position.z = 15;
  camera.lookat(0, 0, 0);

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
