import { createToast } from "mosha-vue-toastify";

export default function showToast(message, type = "danger") {
  const backgroundColor = type === "success" ? "#013220 " : "#520000";
  createToast(
    {
      title: type.charAt(0).toUpperCase() + type.slice(1),
      description: message,
    },
    {
      type,
      position: "bottom-left",
      transition: "slide",
      hideProgressBar: true,
      swipeClose: true,
      style: {
        backgroundColor,
      },
    }
  );
}
