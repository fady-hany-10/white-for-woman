window.addEventListener('load', function() {
    document.getElementById('splash-logo').src = shopData.logo;
    document.getElementById('splash-name').textContent = shopData.name;
    document.getElementById('links-logo').src = shopData.logo;
    document.getElementById('links-name').textContent = shopData.name;

    const linksContainer = document.getElementById('links-container');
    shopData.links.forEach(function(link) {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = 'btn';
        a.target = '_blank';
        a.textContent = link.name;
        linksContainer.appendChild(a);
    });

    setTimeout(function() {
        document.getElementById('splash').classList.add('hide');
        document.getElementById('links').classList.add('show');
    }, 2000);
});