const mockMenus = {
  'en-us': [
    {
      'name': 'Examples',
      'key': 'toA',
      'children': [
        {
          'name': 'MultipleExamples',
          'key': 'menugroupAA',
          'icon': '<svg t=\'1565693911504\' viewBox=\'0 0 1024 1024\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' p-id=\'4117\' width=\'14\' height=\'14\'><path d=\'M529.0496 527.616l-30.7712-30.7456 85.0688-85.0944 30.7712 30.7712z\' p-id=\'4118\' fill=\'#1296db\'></path><path d=\'M0 340.48l427.52 256 248.32 427.52L1024 0l-1024 340.48zM665.6 921.6l-207.36-355.84-355.84-212.48L911.36 81.92l-243.2 243.2 30.72 30.72 243.2-243.2L665.6 921.6z\' p-id=\'4119\' fill=\'#1296db\'></path></svg>',
          'children': [
            {
              'name': 'DefaultExample',
              'url': '/DefaultExample',
              'key': 'DefaultExample',
              'icon': '<svg t=\'1565694032619\' viewBox=\'0 0 1024 1024\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' p-id=\'4926\' width=\'14\' height=\'14\'><path d=\'M378.88 660.48a16 16 0 0 0 16 0l85.12-48.64a16 16 0 0 0 8.32-14.08V499.84a16 16 0 0 0-7.68-14.08l-85.76-48.64a16 16 0 0 0-16 0l-84.48 48.64a16 16 0 0 0-7.68 14.08v97.92a16 16 0 0 0 8.32 14.08zM320 512l64-42.88L455.68 512v76.16L384 628.48l-64-40.32z\' fill=\'#1296db\' p-id=\'4927\'></path><path d=\'M387.2 548.48m-17.28 0a17.28 17.28 0 1 0 34.56 0 17.28 17.28 0 1 0-34.56 0Z\' fill=\'#1296db\' p-id=\'4928\'></path><path d=\'M525.44 499.84v97.92a16 16 0 0 0 8.32 14.08l85.12 49.28a16 16 0 0 0 16 0l85.12-49.28a16 16 0 0 0 8.32-14.08V499.84a16 16 0 0 0-7.68-14.08l-85.76-48.64a16 16 0 0 0-16 0l-85.12 49.28a16 16 0 0 0-8.32 13.44z m32 8.96l69.12-39.68 69.12 42.88v76.16l-69.12 39.68-69.12-39.68z\' fill=\'#1296db\' p-id=\'4929\'></path><path d=\'M626.56 548.48m-17.28 0a17.28 17.28 0 1 0 34.56 0 17.28 17.28 0 1 0-34.56 0Z\' fill=\'#1296db\' p-id=\'4930\'></path><path d=\'M498.56 458.24a16 16 0 0 0 16 0l85.12-49.28a16 16 0 0 0 8.32-14.08V297.6a16 16 0 0 0-7.68-14.08L512 234.88a16 16 0 0 0-16 0l-85.12 49.28a16 16 0 0 0-7.68 14.08v97.28a16 16 0 0 0 8.32 14.08z m-64-151.68l69.12-39.68L576 306.56V384l-69.12 39.68L437.76 384z\' fill=\'#1296db\' p-id=\'4931\'></path><path d=\'M506.88 346.24m-17.28 0a17.28 17.28 0 1 0 34.56 0 17.28 17.28 0 1 0-34.56 0Z\' fill=\'#1296db\' p-id=\'4932\'></path><path d=\'M930.56 108.16H80a32 32 0 0 0-32 32v614.4a32 32 0 0 0 32 32h850.56a32 32 0 0 0 32-32v-614.4a32 32 0 0 0-32-32z m-32 614.4H112v-550.4H896zM665.6 851.84h-320a32 32 0 0 0 0 64h320a32 32 0 0 0 0-64z\' fill=\'#1296db\' p-id=\'4933\'></path></svg>'
            },
            {
              'name': 'ChartExample',
              'url': '/ChartExample',
              'key': 'ChartExample',
              'icon': '<svg t=\'1565693591368\' viewBox=\'0 0 1024 1024\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' p-id=\'2557\' width=\'14\' height=\'14\'><path d=\'M986.624 890.88H69.632V97.28c0-18.432-15.36-33.792-34.816-33.792S0 78.848 0 97.28v825.856c0 11.264 6.144 22.016 15.36 28.16 7.168 6.144 16.384 9.728 26.112 9.728h945.152c20.48 0 37.376-15.36 37.376-34.816s-16.896-35.328-37.376-35.328z\' p-id=\'2558\' fill=\'#1296db\'></path><path d=\'M159.744 722.432c9.216 0 18.432-3.584 25.088-10.24L354.304 542.72l152.064 152.064c13.824 13.824 36.352 13.824 50.688 0l332.8-332.8c10.24-10.24 13.312-25.6 7.68-38.912-5.632-13.312-18.432-22.016-32.768-22.016h-237.568c-19.456 0-35.84 15.872-35.84 35.84s15.872 35.84 35.84 35.84H778.24L531.456 619.52 379.392 467.456c-13.824-13.824-36.352-13.824-50.688 0l-194.56 194.56c-13.824 13.824-13.824 36.352 0 50.688 7.68 6.656 16.384 9.728 25.6 9.728z\' p-id=\'2559\' fill=\'#1296db\'></path></svg>'
            },
            {
              'name': 'FormExample',
              'url': '/FormExample',
              'key': 'FormExample',
              'icon': '<svg t=\'1565694155346\' viewBox=\'0 0 1024 1024\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' p-id=\'5871\' width=\'14\' height=\'14\'><path d=\'M288 512l256 0C561.92 512 576 497.92 576 480 576 462.08 561.92 448 544 448l-256 0C270.08 448 256 462.08 256 480 256 497.92 270.08 512 288 512zM768 64 192 64C121.6 64 64 121.6 64 192l0 576c0 70.4 57.6 128 128 128l576 0c70.4 0 128-57.6 128-128L896 192C896 121.6 838.4 64 768 64zM832 768c0 35.2-28.8 64-64 64L192 832c-35.2 0-64-28.8-64-64L128 192c0-35.2 28.8-64 64-64l576 0c35.2 0 64 28.8 64 64L832 768zM672 256l-384 0C270.08 256 256 270.08 256 288 256 305.92 270.08 320 288 320l384 0C689.92 320 704 305.92 704 288 704 270.08 689.92 256 672 256zM608 640l-320 0C270.08 640 256 654.08 256 672l0 0C256 689.92 270.08 704 288 704l320 0c17.92 0 32-14.08 32-32l0 0C640 654.08 625.92 640 608 640z\' p-id=\'5872\' fill=\'#1296db\'></path></svg>'
            },
            {
              'name': 'EmptyExample',
              'url': '/EmptyExample',
              'key': 'EmptyExample', 'icon': '<svg t=\'1565693791836\' viewBox=\'0 0 1024 1024\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' p-id=\'3575\' width=\'14\' height=\'14\'><path d=\'M874.785 956.4h-728.07c-8.633 0-16.64-5.117-21.122-12.496-4.483-7.38-5.347-16.865-1.372-24.527l229.364-443v-262.57c0-13.646 12.192-21.817 25.839-21.817h271.834c13.646 0 23.644 8.17 23.644 21.818v262.655l221.461 442.97c3.825 7.66 3.676 17.365-0.83 24.644-4.502 7.278-12.187 12.322-20.748 12.322z m-687.387-49.12h647.447L630.3 494.077c-1.713-3.424-1.446-7.967-1.446-11.795V240.085H403.727v242.33c0 3.963-0.749 8.635-2.577 12.156l-213.752 412.71z m562.709-667.195H292.932c-13.647 0-24.712-10.4-24.712-24.048s11.065-24.047 24.712-24.047h457.176c13.647 0 24.712 10.4 24.712 24.047s-11.065 24.048-24.713 24.048zM255.348 685.223H763.93v50.142H255.348v-50.142zM484.521 65.521h52.456v52.456H484.52V65.521z m-121.287 0h52.455v52.456h-52.455V65.521z m242.575 0h52.455v52.456H605.81V65.521z\' p-id=\'3576\' fill=\'#1296db\'></path></svg>'
            }
          ]
        },
        {
          'name': 'StyleExamples',
          'key': 'componentExample',
          'children': [
            {
              'name': 'Buttons',
              'url': '/Buttons',
              'key': 'buttons'
            },
            {
              'name': 'Forms',
              'url': '/Forms',
              'key': 'forms'
            },
            {
              'name': 'Cascaders',
              'url': '/Cascaders',
              'key': 'cascaders'
            },
            {
              'name': 'Menus',
              'url': '/Menus',
              'key': 'menus'
            },
            {
              'name': 'Switchs',
              'url': '/Switchs',
              'key': 'switchs'
            },
            {
              'name': 'Sliders',
              'url': '/Sliders',
              'key': 'sliders'
            },
            {
              'name': 'Tables',
              'url': '/Tables',
              'key': 'tables'
            },
            {
              'name': 'Charts',
              'url': '/Charts',
              'key': 'charts'
            },
            {
              'name': 'Uploads',
              'url': '/Uploads',
              'key': 'uploads'
            },
            {
              'name': 'Breadcrumbs',
              'url': '/Breadcrumbs',
              'key': 'breadcrumbs'
            },
            {
              'name': 'Paginations',
              'url': '/Paginations',
              'key': 'paginations'
            },
            {
              'name': 'Modals',
              'url': '/Modals',
              'key': 'modals'
            },
            {
              'name': 'Notification',
              'url': '/Notification',
              'key': 'notification'
            },
            {
              'name': 'ResultPage',
              'url': '/ResultPage',
              'key': 'resultPage'
            },
            {
              'name': 'TabsCard',
              'url': '/TabsCard',
              'key': 'tabsCard'
            },
            {
              'name': 'StepsCard',
              'url': '/StepsCard',
              'key': 'StepsCard'
            },
            {
              'name': 'MenusCard',
              'url': '/MenusCard',
              'key': 'menusCard'
            },
            {
              'name': 'ProgressCard',
              'url': '/ProgressCard',
              'key': 'progressCard'
            },

          ]
        }
      ]
    },
    {
      'name': 'IconB',
      'icon': 'IconB',
      'key': 'toB',
      'children': [
        {
          'name': 'toB1',
          'url': '/toB1',
          'key': 'toC'
        },
        {
          'name': 'toB2',
          'url': '/toB2',
          'key': 'D'
        }
      ]
    },
    {
      'name': 'JDSelf',
      'icon': 'IconC2',
      'key': 'toC2',
      'url': 'https://www.jd.com',
      'target': '_self'
    },
    {
      'name': 'JDBlank',
      'icon': 'IconC2',
      'key': 'toC2',
      'url': 'https://www.jd.com',
      'target': '_blank'
    }
  ],
  'zh-cn': [
    {
      'name': '示例展示',
      'key': 'toA',
      'children': [
        {
          'name': '综合示例',
          'key': 'menugroupAA',
          'icon': '<svg t=\'1565693911504\' viewBox=\'0 0 1024 1024\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' p-id=\'4117\' width=\'14\' height=\'14\'><path d=\'M529.0496 527.616l-30.7712-30.7456 85.0688-85.0944 30.7712 30.7712z\' p-id=\'4118\' fill=\'#1296db\'></path><path d=\'M0 340.48l427.52 256 248.32 427.52L1024 0l-1024 340.48zM665.6 921.6l-207.36-355.84-355.84-212.48L911.36 81.92l-243.2 243.2 30.72 30.72 243.2-243.2L665.6 921.6z\' p-id=\'4119\' fill=\'#1296db\'></path></svg>',
          'children': [
            {
              'name': '默认示例',
              'url': '/DefaultExample',
              'key': 'DefaultExample',
              'icon': '<svg t=\'1565694032619\' viewBox=\'0 0 1024 1024\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' p-id=\'4926\' width=\'14\' height=\'14\'><path d=\'M378.88 660.48a16 16 0 0 0 16 0l85.12-48.64a16 16 0 0 0 8.32-14.08V499.84a16 16 0 0 0-7.68-14.08l-85.76-48.64a16 16 0 0 0-16 0l-84.48 48.64a16 16 0 0 0-7.68 14.08v97.92a16 16 0 0 0 8.32 14.08zM320 512l64-42.88L455.68 512v76.16L384 628.48l-64-40.32z\' fill=\'#1296db\' p-id=\'4927\'></path><path d=\'M387.2 548.48m-17.28 0a17.28 17.28 0 1 0 34.56 0 17.28 17.28 0 1 0-34.56 0Z\' fill=\'#1296db\' p-id=\'4928\'></path><path d=\'M525.44 499.84v97.92a16 16 0 0 0 8.32 14.08l85.12 49.28a16 16 0 0 0 16 0l85.12-49.28a16 16 0 0 0 8.32-14.08V499.84a16 16 0 0 0-7.68-14.08l-85.76-48.64a16 16 0 0 0-16 0l-85.12 49.28a16 16 0 0 0-8.32 13.44z m32 8.96l69.12-39.68 69.12 42.88v76.16l-69.12 39.68-69.12-39.68z\' fill=\'#1296db\' p-id=\'4929\'></path><path d=\'M626.56 548.48m-17.28 0a17.28 17.28 0 1 0 34.56 0 17.28 17.28 0 1 0-34.56 0Z\' fill=\'#1296db\' p-id=\'4930\'></path><path d=\'M498.56 458.24a16 16 0 0 0 16 0l85.12-49.28a16 16 0 0 0 8.32-14.08V297.6a16 16 0 0 0-7.68-14.08L512 234.88a16 16 0 0 0-16 0l-85.12 49.28a16 16 0 0 0-7.68 14.08v97.28a16 16 0 0 0 8.32 14.08z m-64-151.68l69.12-39.68L576 306.56V384l-69.12 39.68L437.76 384z\' fill=\'#1296db\' p-id=\'4931\'></path><path d=\'M506.88 346.24m-17.28 0a17.28 17.28 0 1 0 34.56 0 17.28 17.28 0 1 0-34.56 0Z\' fill=\'#1296db\' p-id=\'4932\'></path><path d=\'M930.56 108.16H80a32 32 0 0 0-32 32v614.4a32 32 0 0 0 32 32h850.56a32 32 0 0 0 32-32v-614.4a32 32 0 0 0-32-32z m-32 614.4H112v-550.4H896zM665.6 851.84h-320a32 32 0 0 0 0 64h320a32 32 0 0 0 0-64z\' fill=\'#1296db\' p-id=\'4933\'></path></svg>'
            },
            {
              'name': '图表示例',
              'url': '/ChartExample',
              'key': 'ChartExample',
              'icon': '<svg t=\'1565693591368\' viewBox=\'0 0 1024 1024\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' p-id=\'2557\' width=\'14\' height=\'14\'><path d=\'M986.624 890.88H69.632V97.28c0-18.432-15.36-33.792-34.816-33.792S0 78.848 0 97.28v825.856c0 11.264 6.144 22.016 15.36 28.16 7.168 6.144 16.384 9.728 26.112 9.728h945.152c20.48 0 37.376-15.36 37.376-34.816s-16.896-35.328-37.376-35.328z\' p-id=\'2558\' fill=\'#1296db\'></path><path d=\'M159.744 722.432c9.216 0 18.432-3.584 25.088-10.24L354.304 542.72l152.064 152.064c13.824 13.824 36.352 13.824 50.688 0l332.8-332.8c10.24-10.24 13.312-25.6 7.68-38.912-5.632-13.312-18.432-22.016-32.768-22.016h-237.568c-19.456 0-35.84 15.872-35.84 35.84s15.872 35.84 35.84 35.84H778.24L531.456 619.52 379.392 467.456c-13.824-13.824-36.352-13.824-50.688 0l-194.56 194.56c-13.824 13.824-13.824 36.352 0 50.688 7.68 6.656 16.384 9.728 25.6 9.728z\' p-id=\'2559\' fill=\'#1296db\'></path></svg>'
            },
            {
              'name': '表单示例',
              'url': '/FormExample',
              'key': 'FormExample',
              'icon': '<svg t=\'1565694155346\' viewBox=\'0 0 1024 1024\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' p-id=\'5871\' width=\'14\' height=\'14\'><path d=\'M288 512l256 0C561.92 512 576 497.92 576 480 576 462.08 561.92 448 544 448l-256 0C270.08 448 256 462.08 256 480 256 497.92 270.08 512 288 512zM768 64 192 64C121.6 64 64 121.6 64 192l0 576c0 70.4 57.6 128 128 128l576 0c70.4 0 128-57.6 128-128L896 192C896 121.6 838.4 64 768 64zM832 768c0 35.2-28.8 64-64 64L192 832c-35.2 0-64-28.8-64-64L128 192c0-35.2 28.8-64 64-64l576 0c35.2 0 64 28.8 64 64L832 768zM672 256l-384 0C270.08 256 256 270.08 256 288 256 305.92 270.08 320 288 320l384 0C689.92 320 704 305.92 704 288 704 270.08 689.92 256 672 256zM608 640l-320 0C270.08 640 256 654.08 256 672l0 0C256 689.92 270.08 704 288 704l320 0c17.92 0 32-14.08 32-32l0 0C640 654.08 625.92 640 608 640z\' p-id=\'5872\' fill=\'#1296db\'></path></svg>'
            },
            {
              'name': '测试示例',
              'url': '/EmptyExample',
              'key': 'EmptyExample', 'icon': '<svg t=\'1565693791836\' viewBox=\'0 0 1024 1024\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' p-id=\'3575\' width=\'14\' height=\'14\'><path d=\'M874.785 956.4h-728.07c-8.633 0-16.64-5.117-21.122-12.496-4.483-7.38-5.347-16.865-1.372-24.527l229.364-443v-262.57c0-13.646 12.192-21.817 25.839-21.817h271.834c13.646 0 23.644 8.17 23.644 21.818v262.655l221.461 442.97c3.825 7.66 3.676 17.365-0.83 24.644-4.502 7.278-12.187 12.322-20.748 12.322z m-687.387-49.12h647.447L630.3 494.077c-1.713-3.424-1.446-7.967-1.446-11.795V240.085H403.727v242.33c0 3.963-0.749 8.635-2.577 12.156l-213.752 412.71z m562.709-667.195H292.932c-13.647 0-24.712-10.4-24.712-24.048s11.065-24.047 24.712-24.047h457.176c13.647 0 24.712 10.4 24.712 24.047s-11.065 24.048-24.713 24.048zM255.348 685.223H763.93v50.142H255.348v-50.142zM484.521 65.521h52.456v52.456H484.52V65.521z m-121.287 0h52.455v52.456h-52.455V65.521z m242.575 0h52.455v52.456H605.81V65.521z\' p-id=\'3576\' fill=\'#1296db\'></path></svg>'
            }
          ]
        },
        {
          'name': '组件样式示例',
          'key': 'componentExample',
          'children': [
            {
              'name': '按钮',
              'url': '/Buttons',
              'key': 'buttons'
            },
            {
              'name': '表单',
              'url': '/Forms',
              'key': 'forms'
            },
            {
              'name': '级联',
              'url': '/Cascaders',
              'key': 'cascaders'
            },
            {
              'name': '菜单',
              'url': '/Menus',
              'key': 'menus'
            },
            {
              'name': '开关',
              'url': '/Switchs',
              'key': 'switchs'
            },
            {
              'name': '滑块',
              'url': '/Sliders',
              'key': 'sliders'
            },
            {
              'name': '表格',
              'url': '/Tables',
              'key': 'tables'
            },
            {
              'name': '图表',
              'url': '/Charts',
              'key': 'charts'
            },
            {
              'name': '上传',
              'url': '/Uploads',
              'key': 'uploads'
            },
            {
              'name': '面包屑',
              'url': '/Breadcrumbs',
              'key': 'breadcrumbs'
            },
            {
              'name': '分页',
              'url': '/Paginations',
              'key': 'paginations'
            },
            {
              'name': '弹窗',
              'url': '/Modals',
              'key': 'modals'
            },
            {
              'name': '通知',
              'url': '/Notification',
              'key': 'notification'
            },
            {
              'name': '异常页',
              'url': '/ResultPage',
              'key': 'resultPage'
            },
            {
              'name': '选项卡',
              'url': '/TabsCard',
              'key': 'tabsCard'
            },
            {
              'name': '步骤条',
              'url': '/StepsCard',
              'key': 'StepsCard'
            },
            {
              'name': '菜单卡',
              'url': '/MenusCard',
              'key': 'menusCard'
            },
            {
              'name': '进度条',
              'url': '/ProgressCard',
              'key': 'progressCard'
            },
            {
              'name': 'Scf图标',
              'url': '/ScfIcon',
              'key': 'ScfIcon'
            },

          ]
        }
      ]
    },
    {
      'name': '菜单一级B',
      'icon': 'IconB',
      'key': 'toB',
      'children': [
        {
          'name': '菜单二级BA',
          'url': '/toB1',
          'key': 'toC'
        },
        {
          'name': '菜单二级BB',
          'url': '/toB2',
          'key': 'D'
        }
      ]
    },
    {
      'name': '京东Self',
      'icon': 'IconC2',
      'key': 'toC2',
      'url': 'https://www.jd.com',
      'target': '_self'
    },
    {
      'name': '京东Blank',
      'icon': 'IconC2',
      'key': 'toC2',
      'url': 'https://www.jd.com',
      'target': '_blank'
    }
  ]
};
const mockLang = {
  'en-us': {
    'roleManage': 'Role management',
    'HELLO': 'Hello, {name}. Welcome to {where}!',
    'TIP': 'This is <span style="color:red">HTML</span>',
    'TIP_VAR': 'This is <span style="color:red">{message}</span>',
    'SALE_START': 'Sale begins {start, date}',
    'SALE_END': 'Sale ends {end, date, long}',
    'COUPON': 'Coupon expires at {expires, time, medium}',
    'SALE_PRICE': 'The price is {price, number, USD}',
    'PHOTO': 'You have {photoNum, plural, =0 {no photos.} =1 {one photo.} other {# photos.}}',
    'MESSAGE_NOT_IN_COMPONENT': 'react-intl-universal is able to internationalize message not in React.Component'
  },
  'zh-cn': {
    'roleManage': '角色管理',
    'HELLO': '你好, {name}。欢迎来到{where}!',
    'TIP': '这是<span style="color:red">HTML</span>',
    'TIP_VAR': '这是<span style="color:red">{message}</span>',
    'SALE_START': '拍卖将在{start, date}开始',
    'SALE_END': '拍卖将在{end, date, full}结束',
    'COUPON': '优惠卷将在{expires, time, medium}过期',
    'TIME': '时间是{theTime, time}',
    'SALE_PRICE': '售价{price, number, CNY}',
    'PHOTO': '你有{photoNum, number}张照片',
    'MESSAGE_NOT_IN_COMPONENT': 'react-intl-universal可以在非React.Component的js文件进行国际化'
  }
};
module.exports = {
  mockMenus,
  mockLang
};

