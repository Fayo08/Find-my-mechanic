import axios from "axios";

/*
 * The API runs on a free host that sleeps when nobody is using it, and takes
 * up to a minute to wake. If a request is still pending after a moment, show a
 * small banner so visitors know the app isn't broken.
 */
let pending = 0;
let timer = null;
let banner = null;

function show() {
  if (banner) return;
  banner = document.createElement("div");
  banner.setAttribute("role", "status");
  banner.textContent = "Waking up the free server… the first load can take up to a minute.";
  Object.assign(banner.style, {
    position: "fixed", left: "50%", bottom: "16px", transform: "translateX(-50%)",
    zIndex: "9999", maxWidth: "calc(100% - 32px)", padding: "10px 16px", borderRadius: "999px",
    background: "#13182c", color: "#fff", font: "500 14px/1.4 system-ui, sans-serif",
    boxShadow: "0 8px 24px rgba(0,0,0,.25)", textAlign: "center",
  });
  document.body.appendChild(banner);
}
function hide() {
  clearTimeout(timer);
  timer = null;
  if (banner) { banner.remove(); banner = null; }
}

axios.defaults.timeout = 90000;
axios.interceptors.request.use((config) => {
  pending += 1;
  if (!timer) timer = setTimeout(show, 2500);
  return config;
});
function done() {
  pending = Math.max(0, pending - 1);
  if (pending === 0) hide();
}
axios.interceptors.response.use(
  (res) => { done(); return res; },
  (err) => { done(); return Promise.reject(err); }
);
