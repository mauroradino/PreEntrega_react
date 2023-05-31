import { marginRight } from "responsively/dist/utils/marginFunctions/marginFunctions";

const styles = {
  app:{
  },
  header:{
   display:"flex",
   justifyContent: "space-between",
   paddingLeft: "20px",
   paddingRight: "20px",
   backgroundColor: "rgb(204, 203, 203)"
  },
  ul_nav:{
    display: "flex",
    listStyleType: "none",
  },
  nav_li:{
    margin: "20px",
  },
  nav_a:{
    color:"black",
    textDecoration: "none"
  },
  main:{
    backgroundColor: "#e0e0e0",
    height: "100vh"
  },
  cart:{
    position: "relative",
    display: "inline-block",
    top: "30px",
    right:"20px"
  },
  iconCount: {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "50%",
    width: "15px",
    height: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
  }
};


export default styles;