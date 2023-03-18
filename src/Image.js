import React from "react";
import ReactPannellum, { getConfig } from "react-pannellum";

class Image extends React.Component {
  click() {
    console.log(getConfig());
  }

  render() {
    const config = {
      autoRotate: 0
    };
    return (
      <div>
        <ReactPannellum
          id="1"
          sceneId="firstScene"
          imageSource="https://i.imgur.com/Of06d0e.png"
          config={config}
        />
        <div onClick={this.click}>Click me</div>
      </div>
    );
  }
}
export default Image;
