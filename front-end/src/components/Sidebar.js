import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Sidebar = () => {
  const [show, setShow] = useState(true);

  const handle = () => {
    setShow(!show);
  };

  return (
    <>
      <Offcanvas show={show} onHide={handle}>
        <div className="flex flex-col w-1/5 h-screen bg-lime-300 p-4">
          <div className="m-5">
            <Offcanvas.Header closeButton>
              <div className="flex items-center">
                <Offcanvas.Title>
                  <b className="text-3xl border-b-2 border-black p-3">
                    Navegador
                  </b>
                </Offcanvas.Title>
                <div>
                  <Button
                    className="bg-green-600 w-8 h-8 rounded-md ml-6"
                    onClick={handle}
                  >
                    <box-icon
                      name="menu-alt-left"
                      color="#ffffff"
                      className="w-full h-full"
                    ></box-icon>
                  </Button>
                </div>
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <nav className="mt-8">
                <p href="#" className="block mb-2 text-xl">
                  Opciones
                </p>
                <div className="flex mb-2">
                  <box-icon name="home-alt"></box-icon>
                  <a href="#" className="block ml-1">
                    Página de inicio
                  </a>
                </div>
                <div className="flex mb-2">
                  <box-icon name="chevron-down"></box-icon>
                  <a href="#" className="block ">
                    Opciones del sitio
                  </a>
                </div>
                <div className="flex mb-2">
                  <box-icon name="chevron-down"></box-icon>
                  <a href="#" className="block ">
                    Mis cursos
                  </a>
                </div>
              </nav>
            </Offcanvas.Body>
          </div>
        </div>
      </Offcanvas>
      <div style={{ position: "absolute", top: "40px"}}>
        <Button
          className="bg-green-600 w-8 h-8 rounded-md ml-6"
          onClick={handle}
        >
          <box-icon
            name="menu-alt-left"
            color="#ffffff"
            className="w-full h-full"
          ></box-icon>
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
