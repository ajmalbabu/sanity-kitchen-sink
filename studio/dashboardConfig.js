export default {
  widgets: [
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
                  buildHookId: '5ffab1e693ca4a7f11652f16',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-c89p7vfp',
                  apiId: '4bdc1284-26e1-44b8-93e8-e6ca3e84d71a'
                },
                {
                  buildHookId: '5ffab1e60cc6c39e25338805',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cqow9hiv',
                  apiId: '5e1698cd-90e7-4c89-a12e-f91b65199e71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajmalbabu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cqow9hiv.netlify.app', category: 'apps'}
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
