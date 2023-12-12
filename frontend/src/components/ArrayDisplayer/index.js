import React, { useEffect, useState } from 'react';

const ArrayDisplayer = ({ items }) => {
  const [displayedItemIndex, setDisplayedItemIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 20000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [items]);

  const currentDisplayedItem = items[displayedItemIndex];

  return (
    <div>
      <div key={displayedItemIndex}>
        <p>{currentDisplayedItem}</p>
      </div>
    </div>
  );
};

export default ArrayDisplayer;