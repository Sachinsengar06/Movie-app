import { ReactNode } from "react";
import Header from "../components/header/Header"
type LayoutWithHeaderProps = {
    children: ReactNode;  // This defines the type of children
};
const LayoutWithHeader: React.FC<LayoutWithHeaderProps> = ({children}) => {
  return (
    <div>
      <div style={{marginBottom:'60px'}}><Header/></div>
      {children}
    </div>
  )
}

export default LayoutWithHeader
