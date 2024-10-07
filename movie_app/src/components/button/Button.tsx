import styles from "./Button.module.css";
import { IconType } from "react-icons";

interface ButtonProps {
  title?: string;
  backgroundColor: string;
  textColor: string;
  icon?: IconType;
  fun?:()=>void;
}
const Button = ({ title, backgroundColor, textColor, icon:Icon, fun }: ButtonProps) => {
  const handleClick = () => {
    if(fun){
      fun();
    }
    
  }
  return (
    <button
      style={{ backgroundColor: `${backgroundColor}`, color: `${textColor}` }}
      className={styles.btn}
      onClick={()=>handleClick()}
    >
       {Icon && <Icon className={styles.icon} />}
      {title}
    </button>
  );
};

export default Button;
