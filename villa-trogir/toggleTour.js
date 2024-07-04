async function startTour() {

    // await document.getElementById('welcome-menu').classList.add('fade-out');
    document.getElementById('welcome-menu').style.visibility = 'hidden';

    document.getElementById('fullscreenToggle').style.display = 'inline';
    document.getElementById('autorotateToggle').style.display = 'inline';
    document.getElementById('sceneList').style.display = 'inline';
    document.getElementById('sceneListToggle').style.display = 'inline';
    document.getElementById('titleBar').style.display = 'inline';
    document.getElementById('pano').style.filter = 'blur(0px)';
    
    let hotspots = document.getElementsByClassName('link-hotspot-icon');
    for (let hotspot of hotspots) hotspot.style.display = 'inline';
}