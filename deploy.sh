#!/usr/bin/env bash

set -e

npm run build
# TODO: don't use root.
rsync -a build root@165.227.95.153:/var/www/wemustgoforward.com/public