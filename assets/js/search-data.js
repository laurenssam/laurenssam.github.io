// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-started-phd-research-on-safety-in-multimodal-generative-models-at-university-of-amsterdam-supervised-by-prof-yuki-asano-and-prof-sennay-ghebreab",
          title: 'Started PhD research on Safety in Multimodal Generative Models at University of Amsterdam,...',
          description: "",
          section: "News",},{id: "news-major-coverage-in-dutch-media-parool-ad-computable-about-our-privacy-preserving-algorithm-for-public-cameras",
          title: 'Major coverage in Dutch media (Parool, AD, Computable) about our privacy-preserving algorithm for...',
          description: "",
          section: "News",},{id: "news-blurring-as-a-service-featured-by-the-world-economic-forum-as-a-model-for-privacy-preserving-ai",
          title: '“Blurring as a Service” featured by the World Economic Forum as a model...',
          description: "",
          section: "News",},{id: "news-our-work-on-amsterdam-s-scan-bike-featured-in-binnenlands-bestuur-citizen-participation-in-ai-development",
          title: 'Our work on Amsterdam’s scan bike featured in Binnenlands Bestuur - citizen participation...',
          description: "",
          section: "News",},{id: "news-started-new-role-as-lead-r-amp-amp-d-llms-at-city-of-amsterdam-leading-implementation-of-large-language-models-across-the-organization",
          title: 'Started new role as Lead R&amp;amp;amp;D LLMs at City of Amsterdam, leading implementation...',
          description: "",
          section: "News",},{id: "news-excited-to-share-our-work-on-little-data-big-impact-privacy-aware-visual-language-models-via-minimal-tuning-we-introduce-privbench-and-privtune-showing-that-vlm-privacy-awareness-can-be-dramatically-improved-with-just-100-training-samples-surpassing-gpt-4-performance-read-on-arxiv",
          title: 'Excited to share our work on “Little Data, Big Impact: Privacy-Aware Visual Language...',
          description: "",
          section: "News",},{id: "news-new-preprint-on-arxiv-with-alexandre-pires-sennay-ghebreab-and-fernando-santos-we-explore-how-large-language-models-judge-and-influence-human-cooperation-we-assess-21-llms-on-cooperative-judgements-and-show-their-long-term-impact-on-human-prosociality-through-evolutionary-game-theory-read-on-arxiv",
          title: 'New preprint on arXiv! With Alexandre Pires, Sennay Ghebreab, and Fernando Santos, we...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C.%73%61%6D%73%6F%6E@%75%76%61.%6E%6C", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/laurenssam", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/laurens-samson-1674a56b", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HpYCDfEAAAAJ", "_blank");
        },
      },];
