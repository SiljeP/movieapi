export default function manifest() {
  return {
    "id": "any_id",
    "name": "Moviebox",
    "short_name": "Movies",
    "description": "An PWA app to see movie information from The Movie Database",
    "icons": [
      {
        "src": "/images/icon72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "/images/icon192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/images/icon384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/images/icon512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "theme_color": "#FFFFFF",
    "background_color": "#FFFFFF",
    "start_url": "/",
    "scope": ".",
    "display": "fullscreen",
    "orientation": "portrait"
  }
}
