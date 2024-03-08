function Box({ position, color }) {
  return (
    <mesh position={position}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Box;
