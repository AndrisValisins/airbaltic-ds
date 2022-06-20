import type { App } from "vue";
import { BtButton } from "./components/Buttons/BtButton";
import { BtTypography } from "./components/Text/BtTypography";

export default {
  install: (app: App) => {
    app.component("BtButton", BtButton);
    app.component("BtTypography", BtTypography);
  },
};

export { BtButton };
export { BtTypography };
