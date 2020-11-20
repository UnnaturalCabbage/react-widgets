import React, { useRef } from "react";

import Modal, { ModalProps } from "@material-ui/core/Modal";
import RootRef from "@material-ui/core/RootRef";

const RootModal: React.ComponentType<ModalProps> = (props) => {
  const domRef = useRef<HTMLElement>();

  return (
    <div>
      <RootRef rootRef={domRef}>
        <div>
          <Modal container={domRef.current} {...props}></Modal>
        </div>
      </RootRef>
    </div>
  );
};

export default RootModal;
