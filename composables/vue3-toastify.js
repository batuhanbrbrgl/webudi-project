import pkg from 'mosha-vue-toastify';
const { createToast } = pkg;

export default function showToast(message, type = "danger") {
  const backgroundColor = type === "success" ? "#013220 " : "#520000";
  createToast(
    {
      title: type.charAt(0).toUpperCase() + type.slice(1),
      description: message,
    },
    {
      type,
      description: message,
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