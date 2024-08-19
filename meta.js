const params = new URLSearchParams(window.location.search)

// dynamic image meta
document.querySelector('meta[property="og:image"]').setAttribute("content", params.get('image'))

// disable scroll
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, { passive: false });

// disable zoom
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
})


function isEncoded(uri) {
    uri = uri || ''
    return uri !== decodeURIComponent(uri)
}