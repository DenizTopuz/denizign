#!/usr/bin/env bash
# Uploads the built site (./out) to the hosting account over FTP with TLS.
# Called by .github/workflows/deploy.yml. Needs FTP_SERVER, FTP_USERNAME and
# FTP_PASSWORD in the environment (GitHub repository secrets).
#
# It only adds and replaces files. It never deletes anything on the server,
# so the SSL validation folder (.well-known) and other files stay untouched.
set -euo pipefail

if [ -z "${FTP_SERVER:-}" ] || [ -z "${FTP_USERNAME:-}" ] || [ -z "${FTP_PASSWORD:-}" ]; then
  echo "FTP secrets are not set, so nothing was uploaded."
  exit 0
fi

if [ ! -f out/index.html ]; then
  echo "out/index.html is missing: the build did not run." >&2
  exit 1
fi

sudo apt-get install -y -qq lftp >/dev/null

# The password is passed through the environment, not the command line.
export LFTP_PASSWORD="$FTP_PASSWORD"

lftp --env-password -u "$FTP_USERNAME" "$FTP_SERVER" <<LFTP
set cmd:fail-exit yes
set ftp:ssl-allow yes
set ftp:ssl-force yes
set ftp:ssl-protect-data yes
set ssl:verify-certificate no
set net:max-retries 5
set net:reconnect-interval-base 3
set net:timeout 30
mirror --reverse --verbose --parallel=3 --no-perms --no-umask out/ public_html/
bye
LFTP

echo "Upload finished."
