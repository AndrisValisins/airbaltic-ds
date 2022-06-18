import BtButton from "./components/Buttons/BtButton/BtButton.vue";
import BtTypography from "./components/Text/BtTypography.vue";

export default {
  install: (app) => {
    app.component("BtButton", BtButton);
    app.component("BtTypography", BtTypography);
  },
};
