import { useEffect, useRef } from 'react';

const Cursor = () => {
  const iconRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      if (iconRef.current) {
        iconRef.current.style.left = `${x}px`;
        iconRef.current.style.top = `${y}px`;
      }

    };

    const addHover = () => cursorRef.current?.classList.add('cursor--hover');
    const removeHover = () => cursorRef.current?.classList.remove('cursor--hover');

    const clickables = document.querySelectorAll('a, button, .flip-card');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor">
      <div ref={iconRef} className="cursor__icon">
        <i className="fa-solid fa-pizza-slice"></i>
      </div>
    </div>
  );
};

export default Cursor;