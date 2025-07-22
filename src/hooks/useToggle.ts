import { useState } from 'react';

type ToggleHandler = {
  toggle: (e?: React.MouseEvent<HTMLElement> | Event) => void;
};

const useToggle = (init: boolean = false): [boolean, ToggleHandler] => {
  const [value, setValue] = useState<boolean>(init);

  return [
    value,
    {
      toggle: (e?: React.MouseEvent<HTMLElement> | Event) => {
        if (e && typeof e.preventDefault === 'function') {
          e.preventDefault();
        }
        setValue((flag) => !flag);
      },
    },
  ];
};

export default useToggle;
