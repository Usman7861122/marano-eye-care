#!/usr/bin/env bash
# Saves every image and video from the old chuvision.com homepage into /public
# Run once on your own computer:  bash scripts/download-assets.sh
# Afterwards, change the URLs in src/data/assets.ts to the local /images and /videos paths.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p public/images public/videos

IMG_BASE="https://www.datocms-assets.com/157807"
IMAGES=(
  1743783946-logo_horizontal-nav.png 1743783976-logo_horizontal-footer.png 1743784020-favicon.png 1743784050-open-graph-card.jpg
  1744133994-3-bento-background-no-doctor.jpg 1744133407-3-bento-1.png
  1744137214-mask-group.png 1744137240-mask-group.png 1744137325-frame-123.png 1744137355-mask-group.png
  1744131210-group-1.png 1744137177-mask-group.png 1744137192-mask-group-1.png
  1779291542-1-ann.jpg 1779291542-2-nicole.jpg 1744240661-video-3.jpg 1744240677-video-4.jpg 1746457580-kristenvideo.jpg
  1744219186-9-video-card-1.jpg 1744219499-9-video-card-2.jpg
  1744219769-1.png 1744219770-2.png 1744219770-3.png 1744219770-4.png 1744219771-5.png
  1744217574-1-doctor-tabs.jpg 1744217574-2-doctor-tabs.jpg 1744217575-3-doctor-tabs.jpg 1744217575-4-doctor-tabs.jpg 1744217574-5-doctor-tabs.jpg
  1744221933-lasik.jpg 1744221933-smile.jpg 1744221932-prk.jpg
  1744222938-2-open.jpg 1744222938-3-open.jpg 1744222938-4-open.jpg
  1744223356-1procedures.jpg 1744223356-2procedures.jpg 1744223356-3procedures.jpg 1744223356-4procedures.jpg 1744223356-5procedures.jpg
  1745611962-17-quote-background.jpg 1744224390-the-chu-foundation.jpg 1744224404-financing.jpg 1744224414-new-patients.jpg
  1744224559-19-meet-our-team.jpg
)
for f in "${IMAGES[@]}"; do
  echo "image  $f"
  curl -fsSL "$IMG_BASE/$f" -o "public/images/$f"
done

declare -A VIDEOS=(
  [hero]=6ArQxIF757sXq7ZZX7kspCRIujjYnAYZ
  [power]=1GDErUAjUhFjxMFeN9I02BguhONQE68DP
  [find-out]=FYwa4ejCtP01CyNiSFTh7rH0201oXiRPJSF
  [cataracts]=74GuSbBg56tn02yPClJrjIZH2MOi027bk9
  [age-video]=S3009VLubi4JGhVfzb9oEgPWtnshPftb1
)
for name in "${!VIDEOS[@]}"; do
  id="${VIDEOS[$name]}"
  for q in high medium; do
    echo "video  $name-$q"
    curl -fsSL "https://videos.tresiocdn.com/$id/$q.mp4" -o "public/videos/$name-$q.mp4"
  done
done
echo "Done."
