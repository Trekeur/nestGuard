

export const environments = {

    //↓url site 
    urlSite: 'https://api.laposte.fr/codedelaroute/v1/sites',
    //↓url session
    urlSession: 'https://api.laposte.fr/codedelaroute/v1/sessions?',
    //↓url gouvernement
    urlGouv: 'https://geo.api.gouv.fr/departements',
    //↓ variable contenant le nom et et la clef d'authentification api

    authorizationKey: {
        headers: {
            'X-Okapi-Key': 'aJ5lzNe+A4R/SFAOh4HLivPzh2oTWUGRFnPzUH+B0E/TgDk6RgFRJ8wXDfHaj75j'
        }
    },

    jwtConstantsSecretKey: {
        secret: 'secretKey',
    }
};