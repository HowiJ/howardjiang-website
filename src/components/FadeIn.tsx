import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = Readonly<{
  children: React.ReactNode;
  threshold?: number;
}>;

function FadeIn({ children, threshold = 0.5 }: Props): React.ReactElement {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.reduce(
          (acc, entry) => acc || entry.isIntersecting,
          false,
        );
        setIsVisible(isVisible);
      },
      {
        threshold: threshold ?? 0.7,
      },
    );
    observer.observe(domRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <span
      ref={domRef}
      className={css(
        styles.main,
        isVisible ? styles.visible : styles.invisible,
      )}
    >
      {children}
    </span>
  );
}

const opacityKeyframes = [
  {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
];
const styles = StyleSheet.create({
  main: {
    transition: 'opacity',
    transitionDuration: '2s',
    opacity: 0,
    animationName: [[], opacityKeyframes],
    animationDuration: '2s',
    'animation-fill-mode': 'forwards',
  },
  visible: {
    opacity: 1,
  },
  invisible: {
    opacity: 0,
  },
});

export default FadeIn;
