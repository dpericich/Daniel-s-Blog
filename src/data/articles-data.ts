type ArticleEntry = {
    title: string,
    date: string,
    blurb: string,
    author: string,
    link: string
}

export const ArticleData: ArticleEntry[] = [
    {
        title: 'How To Validate File Types for File Uploads in JavaScript — Front End',
        date: 'March 24, 2024',
        blurb: 'Sharing files is an integral part of today’s internet. Users need tools to upload their legal documents, vlog videos, and meme images. While creating a file uploader is not hard, ensuring that only…',
        author: 'Daniel Pericich',
        link: 'https://dpericich.medium.com/how-to-validate-file-types-for-file-uploads-in-javascript-front-end-ce81b8675f68'
    },
    {
        title: 'How to Skip React useEffect on Initial Render',
        date: 'September 16, 2023',
        blurb: 'Many React developers support using function components over class components. Function components are smaller, and offer the ability to build child UI elements that manage their own state. However…',
        author: 'Daniel Pericich',
        link: 'https://dpericich.medium.com/how-to-bypass-useeffect-on-your-first-page-render-c31b7ba112a7'
    },
    {
        title: 'How to Get Around Netflix’s New Household Policy',
        date: 'July 16, 2023',
        blurb: 'May 25th, 2023 was a dark day for many Netflix streamers. The company that famously tweeted Love is sharing a password six years earlier launched a global update to address account password sharing…',
        author: 'Daniel Pericich',
        link: 'https://dpericich.medium.com/how-to-get-around-netflixs-new-household-policy-d2c41fa8ffd5'
    },
    {
        title: 'How to use JavaScript’s FormData Object to Send Complex Data',
        date: 'October 30, 2022',
        blurb: 'How to create complex FormData objects using JavaScript and React. Learn how to create deeply nested File keys for the FromData JS object.',
        author: 'Daniel Pericich',
        link: 'https://dpericich.medium.com/how-to-use-javascripts-formdata-object-to-send-complex-data-c07c31c95f6c'
    },
    {
        title: 'How to Build Multi Type Multidimensional Arrays in TypeScript',
        date: 'June 14, 2022',
        blurb: 'How to build multi type multidimensional arrays in TypeScript. Be able to build nested TypeScript arrays by specifying structure and child element values.',
        author: 'Daniel Pericich',
        link: 'https://dpericich.medium.com/how-to-build-multi-type-multidimensional-arrays-in-typescript-a9550c9a688e'
    },
    {
        title: 'Why does console.log() return ‘undefined’?',
        date: 'February 28, 2022',
        blurb: 'Why Node.js REPLs are how they are, and what happens when there is nothing to evaluate',
        author: 'Daniel Pericich',
        link: 'https://blog.bitsrc.io/why-does-console-log-return-undefined-e06d44b4d0f8'
    },
    {
        title: 'Performing Union and Intersection Operations in Ruby on Rails',
        date: 'November 18, 2021',
        blurb: 'How to perform Intersection and Union operations on Ruby on Rails ActiveRecord Relations. Operations are performed using "or" and "merge" methods between...',
        author: 'Daniel Pericich',
        link: 'https://dpericich.medium.com/performing-union-and-intersection-operations-in-ruby-on-rails-3f56e03f2637'
    },
    {
        title: 'Using the React Children Prop to Create Reusable Layout Components',
        date: 'June 7, 2021',
        blurb: 'You can create a reusable Layout component in React without knowing its nested components by making use of React’s “children” prop. By passing in the children prop to your Layout component, you…',
        author: 'Daniel Pericich',
        link: 'https://medium.com/nerd-for-tech/using-the-react-children-prop-to-create-reusable-layout-components-93667aedc881'
    },
    {
        title: 'How to Convert Strings to Booleans in Ruby',
        date: 'May 27, 2021',
        blurb: 'While working on a recent project, I came upon a guard clause acting on an API response. My app returned a specific message to the user based on whether or not the API gave back a value of true or…',
        author: 'Daniel Pericich',
        link: 'https://medium.com/geekculture/how-to-convert-strings-to-booleans-in-ruby-f17abb2f0a7b'
    },
    {
        title: 'Using RSpec’s change Matcher to Test Record Creation',
        date: 'May 20, 2021',
        blurb: 'If you work with e-commerce for long enough, you will likely run into the issue of conditional money transaction records. While services like Stripe make it very easy to handle credit card…',
        author: 'Daniel Pericich',
        link: 'https://dpericich.medium.com/using-rspecs-change-matcher-to-test-record-creation-9da2216224af'
    },
]