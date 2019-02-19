import { jsx, css } from "@emotion/core";

const hotpink = css({
  color: "hotpink"
});

const hotpinkHoverOrFocus = css({
  ":hover,:focus": hotpink
});

const hotpinkWithBlackBackground = css(
  {
    backgroundColor: "black",
    color: "green"
  },
  hotpink
);
