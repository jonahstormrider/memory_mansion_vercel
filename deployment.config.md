# Memory Mansion Deployment Configuration

This file contains configuration for deploying the Memory Mansion 3D application to various hosting platforms.

## Deployment Options

### Option 1: Heroku
```
{
  "buildpacks": [
    { "url": "heroku/nodejs" }
  ],
  "env": {
    "NPM_CONFIG_PRODUCTION": "false"
  }
}
```

### Option 2: Netlify
```
[build]
  publish = "/"
  command = "# no build command needed"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: Vercel
```
{
  "version": 2,
  "builds": [
    { "src": "server.js", "use": "@vercel/node" },
    { "src": "*.html", "use": "@vercel/static" },
    { "src": "assets/**", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/assets/(.*)", "dest": "/assets/$1" },
    { "src": "/(.*)", "dest": "/server.js" }
  ]
}
```

### Option 4: GitHub Pages
- Simply upload the contents of this directory to a GitHub repository
- Enable GitHub Pages in the repository settings
- Set the source to the main branch

## Environment Variables
- PORT: The port on which the server will run (default: 3000)
