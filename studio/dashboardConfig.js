export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e277ff9f9239f01745e4a7e',
                  title: 'Sanity Studio',
                  name: 'KC-TOD-studio-t7bdmsg5',
                  apiId: '52002dad-6d72-491f-9461-304630169efc'
                },
                {
                  buildHookId: '5e277ff944491901762c0cb8',
                  title: 'Landing pages Website',
                  name: 'KC-TOD-web',
                  apiId: '1c30de0c-3604-4c2a-b959-0592ee1e13bd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gilbster/KC-TOD',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://KC-TOD-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
