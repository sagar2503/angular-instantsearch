#!/bin/bash

#set -e # exit when error

rm -rf ./netlify-dist
mkdir -p ./netlify-dist/examples

# build community website
mv ./community-website/* ./netlify-dist/

# build package
yarn
yarn build

# build examples
SKIP_PACKAGE_BUILD=true yarn examples:ecommerce:build
SKIP_PACKAGE_BUILD=true yarn examples:media:build
SKIP_PACKAGE_BUILD=true yarn examples:storybook:build

mv ./examples/e-commerce/dist ./netlify-dist/examples/e-commerce
mv ./examples/media/dist ./netlify-dist/examples/media
mv ./examples/storybook/storybook-static ./netlify-dist/examples/storybook
