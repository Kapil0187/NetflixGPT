export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USERLOGO = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" 

export const LOGINBG = 'https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg'

export const API_OPTIONS = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWY4NmIxODBlZDZiYmRiMTZlYzM5NDM0YmVlNGE1NSIsInN1YiI6IjY1OTFhNDg5ZWJiOTlkNWU2ZDllOTg4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ei1SuH3jMJOKG230UMPH1zUrwzR7BJJD-E62RLLcXkI'//process.env.REACT_APP_TNDB_KEY,
    },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"
export const NOT_FOUND_CDN_URL = 'https://movix-eta.vercel.app/assets/no-poster-af8294eb.png'

export const SUPPORTED_LANUAES = [
    {
        identifier:"en",
        name:"English"
    },
    {
        identifier:"hindi",
        name:"Hindi"
    },
    {
        identifier:"spanish",
        name:"Spanish"
    }
]

//export const OPENAI_KEY = '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'// process.env.REACT_APP_OPENAI_KEY