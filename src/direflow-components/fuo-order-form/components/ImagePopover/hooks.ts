import { useState } from "react";

export const useImgPopover = () => {
  const [imgPopoverAnchor, setImgPopoverAnchor] = useState<
    EventTarget | Element | null
  >(null);
  const showImage = (el: EventTarget | Element) => setImgPopoverAnchor(el);
  const hideImage = () => setImgPopoverAnchor(null);

  return { imgPopoverAnchor, showImage, hideImage };
};
