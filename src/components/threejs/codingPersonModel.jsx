import { useEffect, useRef } from "react";
import * as THREE from "three";

const CodingPersonModel = () => {
  const modelContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    if (!modelContainerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      modelContainerRef.current.clientWidth / modelContainerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      modelContainerRef.current.clientWidth,
      modelContainerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0);
    modelContainerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    createCodingPersonModel();

    // Handle window resize
    const handleResize = () => {
      if (!modelContainerRef.current) return;
      
      camera.aspect = modelContainerRef.current.clientWidth / modelContainerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        modelContainerRef.current.clientWidth,
        modelContainerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (modelRef.current) {
        // Rotate the model
        modelRef.current.rotation.y += 0.01;
        // Make the model float up and down
        modelRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);
      if (modelContainerRef.current && renderer.domElement) {
        modelContainerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const createCodingPersonModel = () => {
    if (!sceneRef.current) return;
    
    const group = new THREE.Group();
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    sceneRef.current.add(directionalLight);

    // Body - Cube
    const bodyGeometry = new THREE.BoxGeometry(1, 1.5, 0.5);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x3a86ff,
      shininess: 100 
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    group.add(body);

    // Head - Sphere
    const headGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffcdb2,
      shininess: 100 
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.15;
    group.add(head);

    // Arms - Cylinders
    const armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 32);
    const armMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x3a86ff,
      shininess: 100 
    });
    
    // Left arm
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.65, 0, 0);
    leftArm.rotation.z = Math.PI / 3;
    group.add(leftArm);
    
    // Right arm
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.65, 0, 0);
    rightArm.rotation.z = -Math.PI / 3;
    group.add(rightArm);

    // Laptop - Box
    const laptopGeometry = new THREE.BoxGeometry(1.2, 0.05, 0.8);
    const laptopMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x333333,
      shininess: 100 
    });
    const laptop = new THREE.Mesh(laptopGeometry, laptopMaterial);
    laptop.position.set(0, -0.1, 0.65);
    group.add(laptop);

    // Laptop screen - Box
    const screenGeometry = new THREE.BoxGeometry(1.1, 0.8, 0.05);
    const screenMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x6a00f4,
      shininess: 100,
      emissive: 0x6a00f4,
      emissiveIntensity: 0.2
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 0.35, 1);
    screen.rotation.x = Math.PI / 6;
    group.add(screen);

    // Code lines on screen (simple representation)
    const addCodeLine = (y, width) => {
      const lineGeometry = new THREE.BoxGeometry(width, 0.05, 0.01);
      const lineMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const line = new THREE.Mesh(lineGeometry, lineMaterial);
      line.position.set(0, y, 1.03);
      line.rotation.x = Math.PI / 6;
      return line;
    };

    // Add some code lines
    for (let i = 0; i < 5; i++) {
      const width = 0.7 - Math.random() * 0.3;
      const line = addCodeLine(0.5 - i * 0.15, width);
      line.position.x = (Math.random() * 0.4) - 0.2;
      group.add(line);
    }

    // Position and scale the entire model
    group.scale.set(0.8, 0.8, 0.8);
    group.rotation.x = 0.2;
    
    // Add model to the scene
    sceneRef.current.add(group);
    modelRef.current = group;
  };

  return (
    <div 
      ref={modelContainerRef} 
      className="w-64 h-64 mx-auto mt-8 relative"
    >
      {/* Fallback if WebGL not available */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-400 opacity-50">
        Loading 3D Model...
      </div>
    </div>
  );
};

export default CodingPersonModel;