const { slugify } = require("./src/util/utilityFunctions")
const path = require("path")
const authors = require("./src/util/authors")
const _ = require("lodash")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  console.log(node.internal.type)
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  let numberOfServers = 0
  let numberOfPosts = 0
  
  const templates = {
    singleServer: path.resolve("src/templates/single-server.js"),
    tagsPage: path.resolve("src/templates/tags-page.js"),
    tagposts: path.resolve("src/templates/tag-posts.js"),
    postList: path.resolve("src/templates/post-list.js"),
    serverList: path.resolve("src/templates/server-list.js"),
    authorPosts: path.resolve("src/templates/author-posts.js"),
    singlePost: path.resolve("src/templates/single-post.js"),
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
              type
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    const posts = res.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {
      if (node.frontmatter.type === "server") {
        comp = templates.singleServer
        numberOfServers++
      }
      if (node.frontmatter.type === "post") {
        comp = templates.singlePost
        numberOfPosts++
      }
      createPage({
        path: node.fields.slug,
        component: comp,
        context: {
          // Passing slug for template to use to get post
          slug: node.fields.slug,
          // Find author imageUrl from authors and pass it to the single post template
          imageUrl: authors.find(x => x.name === node.frontmatter.author)
            .imageUrl,
        },
      })
    })

    // Create and populate an array of all tags
    let tags = []
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    // Create an object containing the number of times a tag appears.
    let tagPostCounts = {}
    tags.forEach(tag => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    // Eliminate duplicate entries
    tags = _.uniq(tags)

    createPage({
      path: `/tags`,
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts,
      },
    })

    // Create tag posts pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagposts,
        context: {
          tag,
        },
      })
    })

    const postsPerPage = 6
    const numberOfPages = Math.ceil(
      (posts.length - numberOfServers) / postsPerPage
    )
    
    //Creates Post list pages
    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      if (isFirstPage) return

      createPage({
        path: `/news/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage,
          numberOfPages,
        },
      })
    })

    const serversPerPage = 6
    const numberOfServerPages = Math.ceil((posts.length - numberOfPosts) / serversPerPage)

    //Creates server list pages
    Array.from({ length: numberOfServerPages }).forEach((_, serverIndex) => {
      const serverIsFirstPage = serverIndex === 0
      const serverCurrentPage = serverIndex + 1

      if (serverIsFirstPage) return

      createPage({
        path: `/servers/${serverCurrentPage}`,
        component: templates.serverList,
        context: {
          limit: serversPerPage,
          skip: (serverIndex * serversPerPage) - 1,
          serverCurrentPage,
          numberOfServerPages,
        },
      })
    })

    authors.forEach(author => {
      createPage({
        path: `/author/${slugify(author.name)}`,
        component: templates.authorPosts,
        context: {
          authorName: author.name,
          imageUrl: author.imageUrl,
        },
      })
    })
  })
}
