import { useEffect, useState } from "react";

const App = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="container">
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <i class="bi bi-arrow-up-short"></i>
        </button>
      )}
    </div>
  );
};

export default App;
