import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "react-responsive-modal/styles.css";

import { Modal } from "react-responsive-modal";
import { render } from "@testing-library/react";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const lorem = (
  <p>
    Mauris ac arcu sit amet dui interdum bibendum a sed diam. Praesent rhoncus
    congue ipsum elementum lobortis. Ut ligula purus, ultrices id condimentum
    quis, tincidunt quis purus. Proin quis enim metus. Nunc feugiat odio at eros
    porta, ut rhoncus lorem tristique. Nunc et ipsum eu ex vulputate consectetur
    vel eu nisi. Donec ultricies rutrum lectus, sit ame feugiat est semper
    vitae. Proin varius imperdiet consequat. Proin eu metus nisi. In hac
    habitasse platea dictumst. Vestibulum ac ultrices risus. Pellentesque arcu
    sapien, aliquet sed orci sit amet, pulvinar interdum velit. Nunc a rhoncus
    ipsum, maximus fermentum dolor. Praesent aliquet justo vitae rutrum
    volutpat. Ut quis pulvinar est.
  </p>
);

class Index extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
          <App
            open={open}
            saetOpen={this.setOpen}
            onOpenModal={this.onOpenModal}
            onCloseModal={this.onCloseModal}
          />
          <div style={styles}></div>
          <Modal open={open} onClose={this.onCloseModal} center>
            <h2>Simple centered modal</h2>
            {lorem}
            {lorem}
            {lorem}
            {lorem}
            {lorem}
            {lorem}
            {lorem}
            {lorem}
            {lorem}
          </Modal>
        </Router>
      </React.StrictMode>
    );
  }
}

render(<Index />, document.getElementById("root"));
