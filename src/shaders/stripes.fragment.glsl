    varying vec2 vUv;
    uniform float uMultiplier;
    uniform float uAlpha;

    void main() {
      vec2 mulUv = mod(vUv * uMultiplier, 1.0);
      float strength = step(0.5, mulUv.y);
      gl_FragColor.rgba = vec4(vec3(strength), min(strength, uAlpha));
    }