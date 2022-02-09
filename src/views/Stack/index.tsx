import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Stack() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        // 创建场景
        let scene = new THREE.Scene();
        // 设置摄像机
        let camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            2000,
        ); // 相机所能照到的最大角度  宽长比  最近能看到的距离 最远能看到的距离
        // 创建渲染器
        let renderer = new THREE.WebGLRenderer();
        // 设置渲染器的初始颜色
        renderer.setClearColor(new THREE.Color(0xffffff));
        // 设置输出canvas的画面大小
        renderer.setSize(window.innerWidth, window.innerHeight);
        // 设置渲染物体阴影
        renderer.shadowMap.enabled = true;
        // 显示三维坐标系
        let axes = new THREE.AxesHelper(20);
        // 添加坐标系到场景中
        scene.add(axes);
        // 创建地面的几何体
        let planeGeometry = new THREE.PlaneGeometry(60, 20);
        // 设置地面物体的材质
        let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xeeeeee });
        // 创建地面
        let plane = new THREE.Mesh(planeGeometry, planeMaterial);
        // 平面绕x轴旋转角度
        plane.rotation.x = -0.5 * Math.PI;
        // 平面沿x轴移动多少
        plane.position.x = 0;
        // 平面沿y轴移动多少
        plane.position.y = 0;
        // 平面沿z轴移动多少
        plane.position.z = 0;
        // 将地面添加到场景中
        scene.add(plane);
        // 接收阴影
        plane.receiveShadow = true;

        // 添加立方体
        let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
        let cubeMaterial = new THREE.MeshLambertMaterial({ color: 'red' });
        let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.x = 10;
        cube.position.y = 10;
        cube.position.z = 10;
        // 立方体是否渲染到阴影贴图中
        cube.castShadow = true;
        // 添加立方体
        scene.add(cube);

        // 球体
        let spherGeometry = new THREE.SphereGeometry(4, 20, 20);
        let spherMaterial = new THREE.MeshLambertMaterial({ color: 'red' });
        let sphere = new THREE.Mesh(spherGeometry, spherMaterial);
        scene.add(sphere);
        sphere.position.x = 0;
        sphere.position.y = 13;
        sphere.position.z = 4;
        // 立方体是否渲染到阴影贴图中
        sphere.castShadow = true;

        // 创建聚光灯
        let spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(20, 20, 20);
        spotLight.castShadow = true;
        scene.add(spotLight);

        // 定位相机
        camera.position.x = 30;
        camera.position.y = 30;
        camera.position.z = 30;
        // 相机指向场景中心
        camera.lookAt(scene.position);

        // 将渲染器输出添加HTML元素中
        containerRef.current!.appendChild(renderer.domElement);
        renderer.render(scene, camera);
    });

    return <div ref={containerRef}></div>;
}

export default Stack;
