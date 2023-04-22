const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // stash the event so it can be triggered later
    window.deferredPrompt = event;
    // show the install button
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // show the install prompt
    promptEvent.prompt();
    // reset the deferred prompt variable for one use only
    window.deferredPrompt = null;
    // hide the install button
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    // clear the prompt
    window.deferredPrompt = null;
});
