cd ${MIRINAE_PATH} &&
echo "make Mirinae link" &&
npm link &&
cd ${CONSOLE_PATH} &&
echo "link Mirinae to Console" &&
npm link @spaceone/design-system --workspace=web &&
rm -rf apps/web/node_modules/@spaceone
