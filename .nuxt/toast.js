import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"\u002FUsers\u002Fyangai\u002Fcoding\u002Fstock\u002Fnew-company-ui\u002Fnode_modules\u002Fvue-toastification\u002Fdist\u002Findex.css"});
  inject('toast', toast);
}
