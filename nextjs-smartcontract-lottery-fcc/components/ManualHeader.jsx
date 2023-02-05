import React from "react"
import { useMoralis } from "react-moralis"

const ManualHeader = () => {
    const { enableWeb3 } = useMoralis()
    let connected = false

    // some button that connects us and changes connected to be true

    return <div>Hello from Header</div>
}

export default ManualHeader
