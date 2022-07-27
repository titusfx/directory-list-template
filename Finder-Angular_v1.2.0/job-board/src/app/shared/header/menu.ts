import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Home',
        subItems: [
          {
              id: 2,
              label: 'For Job Seekers',
              link: '/home1',
              parentId: 1
          },
          {
              id: 3,
              label: 'For Employers',
              link: '/home2',
              parentId: 1
          },
        ]
    },
    {
      id: 4,
      label: 'Catalog',
      subItems: [
        {
            id: 5,
            label: 'List of Jobs',
            link: '/catalog/list',
            parentId: 4
        },
        {
            id: 6,
            label: 'Single Job Page',
            link: '/catalog/single',
            parentId: 4
        },
      ]
    },
    {
      id: 7,
      label: 'Account',
      subItems: [
        {
            id: 8,
            label: 'Account Pages',
            parentId: 7,
            subItems: [
              {
                id: 9,
                label: 'Profile Settings',
                link: '/account/profile',
                parentId: 8
              },
              {
                id: 10,
                label: 'My Resumes',
                link: '/account/resumes',
                parentId: 8
              },
              {
                id: 11,
                label: 'Saved Jobs',
                link: '/account/jobs',
                parentId: 8
              },
              {
                id: 12,
                label: 'Notifications',
                link: '/account/notifications',
                parentId: 8
              },
              {
                id: 13,
                label: 'Sign In',
                link: '/auth/signin',
                parentId: 8
              },
              {
                id: 14,
                label: 'Sign Up',
                link: '/auth/signup',
                parentId: 8
              }
            ]
        },
        {
            id: 15,
            label: 'Post Resume',
            parentId: 7,
            subItems: [
              {
                id: 16,
                label: 'Step 1: Basic Info',
                link: '/account/resume1',
                parentId: 15
              },
              {
                id: 17,
                label: 'Step 2: Education',
                link: '/account/resume2',
                parentId: 15
              },
              {
                id: 18,
                label: 'Step 3: Work Experience',
                link: '/account/resume3',
                parentId: 15
              },
              {
                id: 19,
                label: 'Step 4: Skills',
                link: '/account/resume4',
                parentId: 15
              },
              {
                id: 20,
                label: 'Step 5: Review',
                link: '/account/resume5',
                parentId: 15
              }
            ]
        },
        {
          id: 21,
          label: 'Ad Promotion Page',
          link: '/account/promotion',
          parentId: 7
        },
        {
          id: 22,
          label: 'Employer / Company Page',
          link: '/account/employer',
          parentId: 7
        },
      ]
    },
    {
      id: 21,
      label: 'Pages',
      subItems: [
        {
            id: 22,
            label: 'About',
            link: '/pages/about',
            parentId: 21
        },
        {
          id: 23,
          label: 'Blog',
          subItems: [
            {
              id: 24,
              label: 'Blog Grid',
              link: '/pages/blog-grid',
              parentId: 23
            },
            {
              id: 25,
              label: 'Single Post',
              link: '/pages/single-blog',
              parentId: 23
            }
          ]
        },
        {
            id: 26,
            label: 'Contacts',
            link: '/pages/contacts',
            parentId: 21
        },
        {
          id: 27,
          label: 'Help Center',
          parentId: 21,
          subItems: [
            {
              id: 28,
              label: 'Help Topics',
              link: '/pages/help-center',
              parentId: 27
            },
            {
              id: 29,
              label: 'Single Topic',
              link: '/pages/single-topic',
              parentId: 27
            }
          ]
        },
        {
          id: 30,
          label: '404 Not Found',
          link: '/pages/404',
          parentId: 21
        },
      ]
    },
];

