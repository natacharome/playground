export function navigate() {
  const path = window.location.hash.slice(1);
  const params = path.split("/");
  const route = params[0];

  const dynamicParam = params[1];

  const container = document.getElementById("content");

  if (container) {
    switch (route) {
      case "":
        container.innerHTML = `<home-page></home-page>`;
        break;
      case "about":
        container.innerHTML = `<about-page></about-page>`;
        break;
      case "contact":
        container.innerHTML = `<contact-page></contact-page>`;
        break;
      case "user":
        container.innerHTML = `<user-detail-page user-id="${dynamicParam}"></user-detail-page>`;
        break;
      default:
        container.innerHTML = `<h1>Page not found</h1>`;
    }
  }
}
