import React from "react";

import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";

import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { useImgPopover } from "./hooks";

interface Props {
  image: string;
  alt?: string;
}

const ImagePopover: React.ComponentType<Props> = ({ image, alt }) => {
  const { imgPopoverAnchor, showImage, hideImage } = useImgPopover();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={(e) => showImage(e.target)}
      >
        <ImageOutlinedIcon color="primary" />
      </Box>
      <Popover
        open={Boolean(imgPopoverAnchor)}
        anchorEl={imgPopoverAnchor as Element}
        onClose={hideImage}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <img width="200" height="200" src={image} alt={alt} />
      </Popover>
    </>
  );
};
export default ImagePopover;
