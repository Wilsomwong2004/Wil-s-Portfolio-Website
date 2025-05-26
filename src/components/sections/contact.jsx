import React, { useRef, useEffect, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import * as THREE from 'three';

const ContactSection = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1f2937);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 0.5, 10);
    pointLight1.position.set(-3, 2, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x3b82f6, 0.5, 10);
    pointLight2.position.set(3, -2, 3);
    scene.add(pointLight2);

    // Load GLB Model
    const loadGLBModel = async () => {
      try {
        // Create GLTFLoader using a different approach since the CDN import doesn't work
        // We'll use a script tag approach instead
        const script = document.createElement('script');
        script.src = 'https://threejs.org/examples/js/loaders/GLTFLoader.js';
        document.head.appendChild(script);
        
        script.onload = () => {
          const loader = new THREE.GLTFLoader();
        
          loader.load(
            '../../assets/character.glb', // Your GLB file path
            (gltf) => {
              const model = gltf.scene;
              
              // Adjust model scale and position
              model.scale.set(1, 1, 1); // Adjust scale as needed
              model.position.set(0, -1, 0); // Adjust position as needed
              
              // Enable shadows for the model
              model.traverse((child) => {
                if (child.isMesh) {
                  child.castShadow = true;
                  child.receiveShadow = true;
                }
              });
              
              scene.add(model);
              modelRef.current = model;
              setIsLoading(false);
            },
            (progress) => {
              console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
            },
            (error) => {
              console.error('Error loading GLB model:', error);
              setError('Failed to load 3D model');
              setIsLoading(false);
            }
          );
        };
        
        script.onerror = () => {
          console.error('Failed to load GLTFLoader script');
          setError('Failed to load 3D model loader');
          setIsLoading(false);
        };
      } catch (err) {
        console.error('Error setting up GLTFLoader:', err);
        setError('Failed to load 3D model loader');
        setIsLoading(false);
      }
    };

    loadGLBModel();

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      if (modelRef.current) {
        // Slow rotation
        modelRef.current.rotation.y += 0.005;
        
        // Optional: floating animation
        // modelRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.2 - 1;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            Contact Me
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </h2>
        </div>
        
        <div className="bg-white dark:bg-gray-700 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
            {/* Contact Information Side */}
            <div className="p-10 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <p className="mb-8">
                Feel free to reach out if you have any questions about my work or want to discuss potential collaborations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>wilsomwong040727@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p>Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="flex space-x-4">
                  <a href="https://github.com/Wilsomwong2004" className="w-10 h-10 rounded-full text-black bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/wilsomwong/" className="w-10 h-10 rounded-full text-blue-600 bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/wilsom_ws/" className="w-10 h-10 rounded-full text-pink-600 bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* 3D Model Side */}
            <div className="relative bg-gray-800 dark:bg-gray-900 flex items-center justify-center">
              <div 
                ref={mountRef} 
                className="w-full h-full min-h-[500px] relative"
                style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
              >
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                      <p>Loading 3D Model...</p>
                    </div>
                  </div>
                )}
                
                {error && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-red-400 text-center">
                      <p>{error}</p>
                      <p className="text-sm mt-2">Check if character.glb file exists</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Model Info Overlay */}
              {!isLoading && !error && (
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg text-sm">
                  <p className="font-semibold">3D Character Model</p>
                  <p className="text-xs opacity-75">Rotating automatically</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;