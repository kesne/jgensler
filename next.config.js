const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
    defaultLayout: true,
    remarkPlugins: [],
    rehypePlugins: [],
})({
    distDir: 'build',
});
