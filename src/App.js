import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Section from "./components/Section";
import Container from "./components/Container";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal/";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState("");

  const formSubmitHandler = (newSearchQuery) => {
    setSearchQuery(newSearchQuery.trim());
  };

  const getImageLargeSize = (e) => {
    setLargeImage(e.target.getAttribute("data-image"));

    setShowModal(!showModal);
  };

  return (
    <div className="App">
      {showModal && (
        <Modal
          onClose={() => setShowModal(!showModal)}
          modalImage={largeImage}
        />
      )}
      <Section>
        <Container>
          <Searchbar onSubmit={formSubmitHandler} />
          <ImageGallery
            searchQuery={searchQuery}
            onOpenModal={getImageLargeSize}
          />
        </Container>
      </Section>
      <ToastContainer />
    </div>
  );
}
