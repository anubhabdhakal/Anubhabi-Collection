import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = (status: string, message: string) => {
  if (status.toLowerCase() === "success") {
    toast.success(message);
    return;
  }
  toast.error(message);
};

export default ToastMessage;
