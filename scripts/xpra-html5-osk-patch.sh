#!/bin/sh
# Re-apply the local patch to /usr/share/xpra/www/index.html after
# `apk upgrade xpra-webclient` overwrites it.
#
# What the patch does:
#   Replaces the line inside `init_keyboard()` that controls the
#   simple-keyboard (OSK) div so that it consults a NEW `osk` URL
#   param before falling back to the existing `keyboard` param.
#   Result: `?osk=false` (or the default-settings.txt `osk = false`)
#   hides the on-screen keyboard without disabling keyboard input to
#   the X11 session.
#
# Usage:  doas sh xpra-html5-osk-patch.sh
set -e

FILE=/usr/share/xpra/www/index.html

# The original (upstream) line we are replacing:
ORIG='var keyboard = getboolparam("keyboard", Utilities.isMobile());'
# The patched line, in the init_keyboard() function only:
PATCHED='var keyboard = getboolparam("osk", getboolparam("keyboard", Utilities.isMobile()));'

doas cp "$FILE" "$FILE.orig"

# Replace ALL occurrences with the patched version first...
doas sed -i "s|$ORIG|$PATCHED|g" "$FILE"

# ...then restore the line 732 occurrence (the one inside init_client()
# that is forwarded to the server as `keyboard: keyboard` and which we
# DO want to keep reading the original `keyboard` param so that
# keyboard input is not disabled by setting osk=false).
doas sed -i '732s|.*|var keyboard = getboolparam("keyboard", Utilities.isMobile());|' "$FILE"

echo "Patched $FILE"
echo "Line 732  (server keyboard input flag):"
sed -n '732p' "$FILE"
echo "Line 1181 (OSK div visibility):"
sed -n '1181p' "$FILE"
