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
    
    // donc la pourquoi on se fait chier à faire ça, c pque sinon vu que les project cards sont générées dynamiquement, ils sont pas pris dans un queryselector, donc on doit rendre ça dynamique aussi en gros
    const handleEnter = (e: MouseEvent) => {
    const target = e.target as Element;
    if (target.closest('a, button, .flip-card')) addHover();
    if (target.closest('h1, footer')) addTourne();
  };

  const handleLeave = (e: MouseEvent) => {
    const target = e.target as Element;
    if (target.closest('a, button, .flip-card')) removeHover();
    if (target.closest('h1, footer')) removeTourne();
  };

  window.addEventListener('mousemove', move);
  document.addEventListener('mouseover', handleEnter);
  document.addEventListener('mouseout', handleLeave);

  return () => {
    window.removeEventListener('mousemove', move);
    document.removeEventListener('mouseover', handleEnter);
    document.removeEventListener('mouseout', handleLeave);
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