import { Polar } from "@polar-sh/sdk"

const accessToken: string | undefined = process.env.POLAR_ACCESS_TOKEN
if (!accessToken) {
    throw new Error("Polar Access Token Null")
}

const polar = new Polar({
    accessToken: accessToken,
    server: "sandbox"
})

export default polar;

