import { useRouter } from "next/router"
import { useEffect } from "react"

export default function redirectToActualYear() {
    const actualYear = new Date().getFullYear()
    const router = useRouter()

    useEffect(() => {
        router.push(`/${actualYear}`)
    }, [])
}
