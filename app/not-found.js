import React from "react";

export const metadata = {
      title: "404 | Not Found",
      description: "404 | Not Found",
};

const NotFound = () => {
      return (
            <div>
                  <div
                        style={{
                              width: "100%",
                              height: "0",
                              paddingBottom: "60%",
                              position: "relative",
                        }}
                  >
                        <iframe
                              src="https://giphy.com/embed/QIKy1Gs9r88iQ"
                              width="100%"
                              height="100%"
                              style={{ position: "absolute" }}
                              frameBorder="0"
                              // className="giphy-embed"
                              allowFullScreen
                        ></iframe>
                  </div>
            </div>
      );
};

export default NotFound;
