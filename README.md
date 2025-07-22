# SeatGeek for TRMNL

[![Build and Deploy](https://github.com/stephenyeargin/trmnl-seatgeek/actions/workflows/build.yml/badge.svg)](https://github.com/stephenyeargin/trmnl-seatgeek/actions/workflows/build.yml)

![promo](assets/promo.png)

## Screenshots

### Venue
![screenshot](assets/screenshot.png)

| Half Horizontal | Half Vertical | Quadrant |
| ---------- | ---------- | ---------- |
| ![screenshot](assets/screenshot-venue-half-horizontal.png) | ![screenshot](assets/screenshot-venue-half-vertical.png) | ![screenshot](assets/screenshot-venue-quadrant.png) |

### Performer
![screenshot](assets/screenshot-performer-full.png)

| Half Horizontal | Half Vertical | Quadrant |
| ---------- | ---------- | ---------- |
| ![screenshot](assets/screenshot-performer-half-horizontal.png) | ![screenshot](assets/screenshot-performer-half-vertical.png) | ![screenshot](assets/screenshot-performer-quadrant.png)

## Development

### Releasing

This project uses automated releases based on the `VERSION` file. To create a new release:

1. Update the version using the bump script:
   ```bash
   ./bin/bump-version [major|minor|patch]
   ```

2. Commit and push the version change:
   ```bash
   git add VERSION
   git commit -m "Bump version to X.Y.Z"
   git push origin main
   ```

3. The GitHub Action will automatically:
   - Create a git tag for the new version
   - Generate release notes from commits
   - Create a GitHub release
   - Deploy to TRMNL using `trmnlp push`

### Manual Development

For local development and testing:

```bash
# Run development server
./bin/dev

# Push to TRMNL (requires API key configuration)
trmnlp push
```
