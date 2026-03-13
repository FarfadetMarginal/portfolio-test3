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
    const addTourne = () => cursorRef.current?.classList.add('cursor--tourne');
    const removeTourne = () => cursorRef.current?.classList.remove('cursor--tourne');

    const clickables = document.querySelectorAll('a, button, .flip-card');
    const titrequifaittourner = document.querySelectorAll('h1, footer');

    clickables.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    titrequifaittourner.forEach(el => {
      el.addEventListener('mouseenter', addTourne);
      el.addEventListener('mouseleave', removeTourne);
    });

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
       titrequifaittourner.forEach(el => {
      el.removeEventListener('mouseenter', addTourne);
      el.removeEventListener('mouseleave', removeTourne);
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