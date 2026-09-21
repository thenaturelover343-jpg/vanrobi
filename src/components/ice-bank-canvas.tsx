import { useEffect, useRef } from "react";
import { useCold } from "@/lib/cold";

const VERT = /* glsl */ `
uniform float uGrow;
varying vec3 vN;
varying vec3 vP;
void main() {
  vN = normalize(normalMatrix * normal);
  float g = mix(0.42, 1.0, uGrow);
  vec3 p = position;
  p.y *= g;
  p.xz *= mix(0.82, 1.0, uGrow);
  vP = p;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`;

const FRAG = /* glsl */ `
uniform float uTime;
uniform float uGrow;
varying vec3 vN;
varying vec3 vP;
void main() {
  vec3 n = normalize(vN);
  vec3 view = normalize(vec3(0.15, 0.2, 1.0));
  float fres = pow(1.0 - max(dot(n, view), 0.0), 1.8);
  float veins = abs(sin(vP.x * 6.2 + uTime * 0.2) * sin(vP.y * 9.5 - uTime * 0.12) * sin(vP.z * 5.4));
  vec3 core = vec3(0.10, 0.28, 0.34);
  vec3 ice = vec3(0.78, 0.96, 1.0);
  vec3 col = mix(core, ice, clamp(fres * 1.15 + uGrow * 0.2, 0.0, 1.0));
  col += ice * veins * 0.22;
  float alpha = 0.72 + fres * 0.28;
  gl_FragColor = vec4(col, alpha);
}
`;

export function IceBankCanvas() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let disposed = false;
    let raf = 0;
    let renderer: import("three").WebGLRenderer | null = null;
    let growValue = useCold.getState().grow;

    const unsub = useCold.subscribe((s) => {
      growValue = s.grow;
    });

    (async () => {
      const THREE = await import("three");
      if (disposed || !hostRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 40);
      camera.position.set(-1.15, 0.12, 4.6);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      const el = renderer.domElement;
      el.style.width = "100%";
      el.style.height = "100%";
      el.style.display = "block";
      host.appendChild(el);

      const uniforms = {
        uTime: { value: 0 },
        uGrow: { value: growValue },
      };
      const mat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: VERT,
        fragmentShader: FRAG,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const geo = new THREE.IcosahedronGeometry(1.7, 5);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(1.35, -0.05, 0);
      scene.add(mesh);

      const wire = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.74, 1),
        new THREE.MeshBasicMaterial({
          color: 0xb7eaf7,
          wireframe: true,
          transparent: true,
          opacity: 0.28,
        }),
      );
      wire.position.copy(mesh.position);
      scene.add(wire);

      const shards = new THREE.Group();
      shards.position.copy(mesh.position);
      const shardMat = new THREE.MeshBasicMaterial({
        color: 0x7ad4f0,
        transparent: true,
        opacity: 0.45,
      });
      for (let i = 0; i < 12; i++) {
        const s = new THREE.Mesh(new THREE.OctahedronGeometry(0.05 + (i % 3) * 0.03, 0), shardMat);
        const a = (i / 12) * Math.PI * 2;
        s.position.set(Math.cos(a) * 2.05, (i % 5) * 0.22 - 0.45, Math.sin(a) * 1.85);
        shards.add(s);
      }
      scene.add(shards);

      scene.add(new THREE.PointLight(0x7ad4f0, 4.2, 16));
      scene.add(new THREE.AmbientLight(0x4aa0b8, 0.85));

      const resize = () => {
        if (!renderer || !hostRef.current) return;
        const w = hostRef.current.clientWidth;
        const h = hostRef.current.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / Math.max(h, 1);
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(host);

      let visible = true;
      const io = new IntersectionObserver(
        (entries) => {
          visible = entries.some((e) => e.isIntersecting);
        },
        { threshold: 0.02 },
      );
      io.observe(host);

      const t0 = performance.now();
      const tick = (now: number) => {
        if (disposed) return;
        raf = requestAnimationFrame(tick);
        if (!visible || !renderer) return;
        const t = (now - t0) / 1000;
        uniforms.uTime.value = t;
        uniforms.uGrow.value += (growValue - uniforms.uGrow.value) * 0.05;
        mesh.rotation.y = t * 0.09;
        mesh.rotation.x = Math.sin(t * 0.21) * 0.1;
        wire.rotation.y = t * 0.06;
        shards.rotation.y = -t * 0.05;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(tick);

      (host as HTMLDivElement & { __dispose?: () => void }).__dispose = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        geo.dispose();
        mat.dispose();
        shardMat.dispose();
        renderer?.dispose();
        renderer?.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      unsub();
      cancelAnimationFrame(raf);
      const d = (host as HTMLDivElement & { __dispose?: () => void }).__dispose;
      d?.();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="ice-fallback absolute inset-0"
      aria-hidden="true"
    />
  );
}
