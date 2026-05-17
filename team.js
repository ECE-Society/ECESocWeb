// Check if device is mobile
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Initialize Three.js scene only if not mobile
if (!isMobile) {
    initThreeJS();
} else {
    // Simple static background for mobile
    document.getElementById('background-canvas').style.background = 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)';
}

function initThreeJS() {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    document.getElementById('background-canvas').appendChild(renderer.domElement);

    // Create particles
    const particleCount = 100;
    const particles = new THREE.Group();

    for (let i = 0; i < particleCount; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 8, 8);
        const material = new THREE.MeshBasicMaterial({
            color: Math.random() * 0xffffff,
            transparent: true,
            opacity: 0.6
        });
        const particle = new THREE.Mesh(geometry, material);

        // Random position
        particle.position.x = (Math.random() - 0.5) * 20;
        particle.position.y = (Math.random() - 0.5) * 20;
        particle.position.z = (Math.random() - 0.5) * 20;

        // Random velocity
        particle.userData.velocity = {
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01,
            z: (Math.random() - 0.5) * 0.01
        };

        particles.add(particle);
    }

    scene.add(particles);

    // Floating shapes
    const shapeCount = 20;
    const shapes = new THREE.Group();

    for (let i = 0; i < shapeCount; i++) {
        const geometry = Math.random() > 0.5 ? new THREE.BoxGeometry(0.5, 0.5, 0.5) : new THREE.TetrahedronGeometry(0.3);
        const material = new THREE.MeshBasicMaterial({
            color: Math.random() * 0xffffff,
            transparent: true,
            opacity: 0.4,
            wireframe: true
        });
        const shape = new THREE.Mesh(geometry, material);

        shape.position.x = (Math.random() - 0.5) * 30;
        shape.position.y = (Math.random() - 0.5) * 30;
        shape.position.z = (Math.random() - 0.5) * 30;

        shape.userData.velocity = {
            x: (Math.random() - 0.5) * 0.005,
            y: (Math.random() - 0.5) * 0.005,
            z: (Math.random() - 0.5) * 0.005
        };

        shape.userData.rotationSpeed = {
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01,
            z: (Math.random() - 0.5) * 0.01
        };

        shapes.add(shape);
    }

    scene.add(shapes);

    camera.position.z = 5;

    // Mouse interaction for parallax
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Update particles
        particles.children.forEach(particle => {
            particle.position.x += particle.userData.velocity.x;
            particle.position.y += particle.userData.velocity.y;
            particle.position.z += particle.userData.velocity.z;

            // Wrap around
            if (particle.position.x > 10) particle.position.x = -10;
            if (particle.position.x < -10) particle.position.x = 10;
            if (particle.position.y > 10) particle.position.y = -10;
            if (particle.position.y < -10) particle.position.y = 10;
            if (particle.position.z > 10) particle.position.z = -10;
            if (particle.position.z < -10) particle.position.z = 10;
        });

        // Update shapes
        shapes.children.forEach(shape => {
            shape.position.x += shape.userData.velocity.x;
            shape.position.y += shape.userData.velocity.y;
            shape.position.z += shape.userData.velocity.z;

            shape.rotation.x += shape.userData.rotationSpeed.x;
            shape.rotation.y += shape.userData.rotationSpeed.y;
            shape.rotation.z += shape.userData.rotationSpeed.z;

            // Wrap around
            if (shape.position.x > 15) shape.position.x = -15;
            if (shape.position.x < -15) shape.position.x = 15;
            if (shape.position.y > 15) shape.position.y = -15;
            if (shape.position.y < -15) shape.position.y = 15;
            if (shape.position.z > 15) shape.position.z = -15;
            if (shape.position.z < -15) shape.position.z = 15;
        });

        // Parallax effect
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;

        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}