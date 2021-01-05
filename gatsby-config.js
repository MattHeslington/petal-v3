module.exports = {
    siteMetadata: {
        title: "P E T A L .",
        siteUrl: "https://petal.pw",
    },
    plugins: [
        "gatsby-plugin-root-import",
        "gatsby-plugin-postcss",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
        {
        resolve: "gatsby-plugin-manifest",
            options: {
                name: `Petal Web Development`,
                short_name: `Petal`,
                description: `Petal is a small boutique design studio dedicated to achieving outstanding results using the latest web technologies.`,
                lang: `en`,
                start_url: `/`,
                background_color: `#0F131B`,
                theme_color: `#0F131B`,
                icon: `src/images/icon.png`,
                display: `standalone`,
            },
        },
        "gatsby-transformer-sharp",
        {
        resolve: "gatsby-source-filesystem",
        options: {
            name: "images",
            path: "./src/images/",
        },
        __key: "images",
        },
        {
        resolve: "gatsby-source-filesystem",
        options: {
            name: "pages",
            path: "./src/pages/",
        },
        __key: "pages",
        },
    ],
};
