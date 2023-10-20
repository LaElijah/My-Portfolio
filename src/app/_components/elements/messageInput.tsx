"use client"


import { TextInput, Textarea } from "@mantine/core"
import { useState } from "react"

import styles from "@/app/_styles/elements/messageInput.module.scss"


export default function MessageInputs() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = async () => {
        const response = await fetch("/api/message", {
            method: "POST",
            body: JSON.stringify({
                name,
                message,
                email
            })
        })

        const { status, message: errorMessage } = await response.json()

        if (status === "failure") setError(errorMessage)
        else {
            setError("success")
            setInterval(() => setError(""), 3000)

        }
    }


    return (
        <section>
            <TextInput onChange={(event) => setName(event.target.value)} label="Name" value={name} id="name" />
            <TextInput onChange={(event) => setEmail(event.target.value)} label="Email" type="email" value={email} id="email" />
            <Textarea minRows={8} autosize multiline onChange={(event) => setMessage(event.target.value)} label="Message" value={message} id="message" />

            <button onClick={handleSubmit} className={(error === "") ? styles.button : styles.errorButton}>Submit</button>
            {(error != "") && (<p>{error}</p>)}
        </section>
    )

}