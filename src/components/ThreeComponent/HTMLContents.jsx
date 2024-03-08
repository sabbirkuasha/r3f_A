import { Html } from "@react-three/drei";

function HTMLContent({ title }) {
  return (
    <Html fullscreen>
      <h1 className="text-2xl m-2 p-2 text-center rounded-lg border-2">
        {title}
      </h1>
    </Html>
  );
}

export default HTMLContent;
