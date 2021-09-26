module.exports = {
  templates: '@scf/react-templates',
  templateData: {
    jest: false,
    e2e: false,
    ts: false,
    mobxRoot: false
  },
  pageTemplates: [
    {
      name: 'default',
      mobx: true
    },
    {
      name: 'chart',
      mobx: true
    },
    {
      name: 'form',
      mobx: true
    },
    {
      name: 'empty',
      mobx: true
    },
    {
      name: 'default',
      alias: 'default-mst'
    },
    {
      name: 'chart',
      alias: 'chart-mst'
    },
    {
      name: 'form',
      alias: 'form-mst'
    },
    {
      name: 'empty',
      alias: 'empty-mst'
    }
  ],
  componentTemplates: [
    {
      name: 'class',
      alias: 'class component'
    },
    {
      name: 'function',
      alias: 'function component'
    }
  ],
  storeTemplates: [
    {
      name: 'mobx',
      mobx: true
    },
    {
      name: 'mst',
      alias: 'mobx-state-tree'
    }
  ],
  files: {
    page: [
      {
        fileName: 'SlideEditor',
        templateName: 'empty-mst'
      },
      {
        fileName: 'reportDetails',
        templateName: 'empty-mst'
      },
      {
        fileName: 'myReport',
        templateName: 'default-mst'
      },
      {
        fileName: 'library',
        templateName: 'default-mst'
      },
      {
        fileName: 'reportEditor',
        templateName: 'empty-mst'
      },
      //{pageFile}//
    ],
    component: [
      {
        fileName: 'test11',
        templateName: 'function component'
      },
      {
        fileName: 'Header',
        templateName: 'function component'
      },
      {
        fileName: 'UploadBlock',
        templateName: 'function component'
      },
      //{componentFile}//
    ],
    store: [
      //{storeFile}//
    ]
  }
};
