// Set CSS variable for bottom bar base height depending on platform (iOS vs others)

function setBarHeight (){
    var ua = navigator.userAgent || '';
    var isIOS = /iPad|iPhone|iPod/.test(ua);

    if(!isIOS) {
        // try to detect iPadOS (Safari on iPad may report a Mac platform)
        var uaDataPlatform = (navigator.userAgentData && navigator.userAgentData.platform) || '';
        var touch = (navigator.maxTouchPoints || 0) > 0;
        var macLike = uaDataPlatform && /Mac/i.test(uaDataPlatform) || /Macintosh|Mac OS X/i.test(ua);
        if(touch && macLike) isIOS = true;
    }

    var iosBase = '1.8rem';
    var otherBase = '3.5rem';
    try {
        document.documentElement.style.setProperty('--bar-height-base', isIOS ? iosBase : otherBase);
        if(isIOS) document.documentElement.classList.add('platform-ios');
    } catch (e) {
}
};

setBarHeight();

