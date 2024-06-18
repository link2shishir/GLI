import { useEffect, useState } from "react";

const ScroollToTop = () => {
  const [is_visible, setIsVisible] = useState(false);

  useEffect(() => {
    const clickfn = () => {
      document.addEventListener("scroll", function (e) {
        toggleVisibility();
      });
    };
    clickfn();

    return () => {
      document.removeEventListener("click", clickfn);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (is_visible) {
    return (
      <div className="scroll_to_top" onClick={scrollToTop}>
        <i class="fas fa-arrow-up"></i>
      </div>
    );
  } else {
    return null;
  }
};

export default ScroollToTop;
