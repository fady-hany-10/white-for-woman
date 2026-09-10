document.addEventListener("DOMContentLoaded", () => {
  // 1. تحديث بيانات الملف الشخصي
  const logoEl = document.getElementById("profile-logo");
  if (logoEl && storeData.logo) logoEl.src = storeData.logo;

  const titleEl = document.getElementById("profile-title");
  if (titleEl && storeData.title) titleEl.innerText = storeData.title;

  const subtitleEl = document.getElementById("profile-subtitle");
  if (subtitleEl && storeData.subtitle) subtitleEl.innerText = storeData.subtitle;

  // 2. إنشاء الأزرار والروابط بشكل مباشر وصريح
  const container = document.getElementById("links-container");
  if (container && storeData.links) {
    container.innerHTML = "";
    storeData.links.forEach(link => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = `link-btn ${link.type || ''} ${link.platform || ''}`;

      let iconHtml = link.icon ? `<img src="${link.icon}" class="btn-icon" alt="${link.name}">` : '';
      a.innerHTML = `${iconHtml}<span class="btn-text">${link.name}</span>`;

      container.appendChild(a);
    });
  }

  // 3. إضافة حقوق شركة Vodoo
  const devContainer = document.getElementById("developed-by");
  if (devContainer && storeData.developer) {
    devContainer.innerHTML = `Powered by <a href="${storeData.developer.url}" target="_blank" rel="noopener noreferrer">${storeData.developer.name}</a>`;
  }
});
