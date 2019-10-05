export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d98f8fc40eaac0eab8bc307',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-uy25n34o',
                  apiId: '8315e3b1-3768-4542-9839-cd37369f77be'
                },
                {
                  buildHookId: '5d98f8fce9ff923f7a713015',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-t4k57uz6',
                  apiId: 'f38e4f03-26c3-4f4a-a707-9788c29591f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kanyo33/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-t4k57uz6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
