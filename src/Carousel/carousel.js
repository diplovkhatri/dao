import images from "./image1.png";

function Carousels() {
  return (
    <>
      <img
        style={{
          width: "100%",
          height: "290px",
          marginTop: "-45px",
          zIndex: "-1"
        }}
        src={images}
      ></img>
    </>
  );
}

export default Carousels;
