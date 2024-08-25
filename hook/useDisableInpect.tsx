import { useEffect } from "react";

const useDisableInspect = () => {
  useEffect(() => {
    const handleContextMenu = (e: any) => {
      alert("Dev tool is blocked on this page..!!");
      e.preventDefault();
    };

    const handleKeyDown = (e: any) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
      ) {
        alert("Dev tool is blocked on this page..!!");
        e.preventDefault();
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useDisableInspect;
