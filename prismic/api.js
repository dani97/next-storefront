import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

async function fetchAPI(query, {previewData, variables} = {}) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  )

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getHomePage(previewData) {
  const data = await fetchAPI(`
    query home {
      home_page(uid: "home", lang: "en-us") {
          title
          welcome_text
          body {
              ... on Home_pageBodyImage_gallery {
                  type
                  label
                  primary {
                      name_of_the_gallery
                  }
                  fields {
                      image_captions
                      gallery_image
                  }
              }
              ... on Home_pageBodyBanner_with_caption {
                  type
                  label
                  primary {
                      image_banner
                      title_of_banner
                      description
                      button_label
                      button_link {
                          _linkType
                      }
                  }
              }
              ... on Home_pageBodyList_of_articles {
                  type
                  label
                  primary {
                      title_of_section
                  }
                  fields {
                      articles_to_link {
                          _linkType
                      }
                  }
              }
              ... on Home_pageBodyMyslice {
                  type
                  label
              }
          }
          _meta {
              tags
              type
              uid
          }
      }
    }
  `, { previewData })
  return data?.home_page
}