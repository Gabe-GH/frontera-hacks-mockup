"use client";

import Image from "next/image";
import { useState } from "react";

export default function FirstTimePopUpModal() {
  const [modalPage, setModalPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const pages = ["one", "two", "three"];

  const handleNextPageClick = () => {
    if (modalPage < pages.length - 1) setModalPage(modalPage + 1);
  };

  const handlePrevPageClick = () => {
    if (modalPage > 0) setModalPage(modalPage - 1);
  };

  const handleCloseButton = () => {
    setIsModalOpen(!isModalOpen);
  };

  const ModalDotProgress = () => {
    return (
      <div className="flex justify-center gap-x-10">
        {pages.map((_page: any, index: number) => (
          <span
            className={index === modalPage ? "dot dot-primary" : "dot"}
            key={index}
          />
        ))}
      </div>
    );
  };

  const ModalPage = () => {
    return <span>{pages[modalPage]}</span>;
  };

  return (
    <>
      {/* Removed the button to open the modal */}

      {/* Modal is now open by default */}
      <input
        className="modal-state"
        id="modal-3"
        type="checkbox"
        checked={isModalOpen}
      />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-3"></label>
        <div className="modal-content flex flex-col gap-5">
          <label
            htmlFor="modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={handleCloseButton}
          >
            ✕
          </label>
          <h2 className="text-xl">Welcome to FronteraHacks!</h2>
          <div></div>
          <div className="flex gap-10 justify-center">
            <button type="button" onClick={handlePrevPageClick}>
              <Image
                src={"/chevron_left.svg"}
                width={25}
                height={25}
                alt={"previous page"}
              />
              <p className="hidden">prev page</p>
            </button>
            <div className="flex flex-col gap-4 mx-auto">
              <ModalPage />
            </div>
            <button type="button" onClick={handleNextPageClick}>
              <Image
                src={"/chevron_right.svg"}
                width={25}
                height={25}
                alt={"next page"}
              />
              <p className="hidden">next page</p>
            </button>
          </div>
          <div className="flex flex-col justify-between h-16">
            <div className="flex gap-3">
              <button type="button" className="btn btn-error btn-block">
                Delete
              </button>
              <button type="button" className="btn btn-block">
                Cancel
              </button>
            </div>
            <ModalDotProgress />
          </div>
        </div>
      </div>
    </>
  );
}
