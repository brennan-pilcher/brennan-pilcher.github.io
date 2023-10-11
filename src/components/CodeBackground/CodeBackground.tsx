import { useEffect, useRef, useState } from 'react';
import './CodeBackground.css';

const sampleCode = "import React, { FormEvent, useEffect, useState } from 'react';\n" +
"\n" +
"import firebase from 'firebase/app';\n" +
"import 'firebase/firestore';\n" +
"import 'firebase/auth';\n" +
"\n" +
"import { useCollectionData } from 'react-firebase-hooks/firestore';\n" +
"import ChatMessage from './ChatMessage';\n" +
"import './ChatRoom.css';\n" +
"\n" +
"interface ChatRoomProps {\n" +
"    readonly auth: firebase.auth.Auth;\n" +
"    readonly firestore: firebase.firestore.Firestore;\n" +
"}\n" +
"\n" +
"interface Chat {\n" +
"    readonly createdAt: string;\n" +
"    readonly photoURL: string;\n" +
"    readonly text: string;\n" +
"    readonly id: string;\n" +
"    readonly uid: string;\n" +
"}\n" +
"\n" +
"const ChatRoom = (props: ChatRoomProps) => {\n" +
"\n" +
"    const messagesRef = props.firestore.collection('messages');\n" +
"    const query = messagesRef.orderBy('createdAt');\n" +
"    const [inputText, setInputText] = useState('');\n" +
"\n" +
"    const [messages]: [Chat[] | undefined, boolean, Error | undefined] = useCollectionData(query, {idField: 'id'});\n" +
"\n" +
"    useEffect(() => {\n" +
"        scrollToBottom();\n" +
"    }, [messages]);\n" +
"\n" +
"    const scrollToBottom = () => {\n" +
"        const messagesDiv = document.getElementById(\"messages\");\n" +
"        if (messagesDiv) messagesDiv.scrollTop = messagesDiv.scrollHeight;\n" +
"    }\n" +
"\n" +
"    const sendMessage = async (e: FormEvent) => {\n" +
"        e.preventDefault();\n" +
"\n" +
"        if (inputText !== '') {\n" +
"            await messagesRef.add({\n" +
"                text: inputText,\n" +
"                createdAt: firebase.firestore.FieldValue.serverTimestamp(),\n" +
"                uid: props.auth.currentUser?.uid,\n" +
"                photoURL: props.auth.currentUser?.photoURL\n" +
"            })\n" +
"            .then(() => scrollToBottom())\n" +
"            .catch(reason => alert(reason));\n" +
"        }\n" +
"\n" +
"        setInputText('');\n" +
"    }\n" +
"\n" +
"    return <>\n" +
"        <div id=\"messages\" className=\"messages\">\n" +
"            {messages && messages.map(message => <ChatMessage key={message.id} message={message.text} sent={message.uid === props.auth.currentUser?.uid} photoURL={message.photoURL}/>)}\n" +
"        </div>\n" +
"\n" +
"        <form className=\"chatBox\" onSubmit={sendMessage}>\n" +
"            <input placeholder=\"Enter your message...\" value={inputText} onChange={e => setInputText(e.target.value)} />\n" +
"            <button className=\"sendButton\" type=\"submit\">Send</button>\n" +
"        </form>\n" +
"    </>;\n" +
"\n" +
"}\n" +
"\n" +
"export default ChatRoom;";

const CodeBackground = () => {
    let [displayText, setDisplayText] = useState("");

    const timer = useRef<ReturnType<typeof setInterval>>();
    const textRef = useRef(0);

    useEffect(() => {
        timer.current = setInterval(() => {
            if (textRef.current < sampleCode.length) {
                textRef.current += 1;
                setDisplayText(text => text + sampleCode[text.length]);
            } else {
                clearInterval(timer.current);
            }
        }, 30 + Math.floor(Math.random() * 70));

        return () => {clearInterval(timer.current)}
    }, []);

    return <div className="code-background">{displayText}</div>
}

export default CodeBackground;