const myApplicationsPromise = (email, accessToken) => {
    return fetch(`https://job-portal-server-black-beta.vercel.app/applications?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
        .then(res => res.json())
}

export default myApplicationsPromise;