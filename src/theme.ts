import { extendTheme } from "@chakra-ui/react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const tailwind = resolveConfig(tailwindConfig);

const theme = {
  colors: {
    current: tailwind.theme?.colors?.current,
    darkblue: tailwind.theme?.colors?.darkblue,
    cyan: tailwind.theme?.colors?.cyan,
    darkyellow: tailwind.theme?.colors?.darkyellow,
    yellow: tailwind.theme?.colors?.yellow,
    gray: tailwind.theme?.colors?.gray,
  },
};

export default extendTheme(theme);
