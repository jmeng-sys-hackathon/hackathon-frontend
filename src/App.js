import Card from "./Components/Card";
import Form from "./Pages/Form1";
import Form2 from "./Pages/Form2";

function App() {
  return (
    <div className="App">
      <h1>CITI Hackathon</h1>
      <Card title="Hey" subtitle="wassup" imgalt="image1" />
      <Card title="weey" subtitle="wassup" imgalt="image2" />
      <Form />
      <Form2 img="src/img.jpeg" />
      {/* <iframe
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLmjaNssVyk8qvjkR8ru5K3%2FYYC-HackApp-Design%3Fnode-id%3D18%253A33611%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D18%253A33611"
        allowfullscreen
        style={{ width: 800, height: 800 }}
      /> */}
    </div>
  );
}

export default App;
