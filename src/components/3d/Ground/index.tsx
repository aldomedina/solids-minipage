import React from "react";

interface GroundProps {
  groundColor: string;
}

const Ground = ({ groundColor }: GroundProps) => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[1009, 1000]} />
      <meshStandardMaterial attach="material" color={groundColor} />
    </mesh>
  );
};
export default Ground;
