var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    new YT.Player('player1', {
        videoId: 'Omi-3kRitzU',
        events: {
            onReady: function(event) {
                event.target.mute();
            }
        }
    }), new YT.Player('player2', {
        videoId: 'NYmjkP-Tyls',
        onReady: function(event) {
            event.target.mute();
        }
    });
}

//# sourceMappingURL=index.2192d9b4.js.map
