
export default {
    findOwner: `
        query findOwner {
            session {
                links {
                    findOwner
                }
            }
        }
    `,
    findKey: `
        query findKey ($key: ID!) {
            links {
                findKey (key: $key)
            }
        }
    `,
    hit: `
        mutation hit ($key: ID!) {
            links {
                hit (key: $key)
            }
        }
    `,
    add: `
        mutation add ($payload: LinksSessionMutation_AddPayload!){
            session {
                links {
                    add (payload: $payload)
                }
            }
        }
    `,
}
