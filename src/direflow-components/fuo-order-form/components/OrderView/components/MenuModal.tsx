import { styled } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const MenuModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 2%",
  [theme.breakpoints.up("md")]: {
    padding: "0 6%",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 10%",
  },
}));

export default MenuModal;
