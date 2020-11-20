import { styled } from "@material-ui/core/styles";
import RootModal from "src/components/RootModal";

const MenuModal = styled(RootModal)(({ theme }) => ({
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
