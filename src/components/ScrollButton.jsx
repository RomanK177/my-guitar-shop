import React, { useState, useEffect } from 'react';

// Mui
import { Button } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the scroll threshold according to your needs
      const scrollThreshold = 400;

      // Update state based on scroll position
      setShowButton(scrollPosition > scrollThreshold);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <>
      {showButton && (
        <Button
          variant='containedRed'
          sx={{
            position: 'fixed',
            bottom: '100px',
            right: '10px',
            minWidth: '32px',
            padding: '5px',
            zIndex: 5,
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <ExpandLessIcon />
        </Button>
      )}
    </>
  );
};

export default ScrollButton;
