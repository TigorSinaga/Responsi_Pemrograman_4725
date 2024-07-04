// plugins/jquery-typed.js
import $ from "jquery";
import Typed from "typed.js";

export default ({ app }, inject) => {
  inject("jquery", $);
  inject("typed", Typed);
};
