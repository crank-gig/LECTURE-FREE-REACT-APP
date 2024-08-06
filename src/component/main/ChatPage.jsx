import React, { useState, useEffect } from 'react';

import '../../component_styles/main/chat_page.css';

const MainLogo = () => {
    return(
        <div className="main-logo-wrapper">
            <div className="main-logo">
                <img
                    src="123.png"
                    alt="lecture free logo"
                />
            </div>
        </div>
    )
}

const Sidebar = ({ 
    showNewQuestion,
    toggleNewQuestion,
    username,
    showSideBar,
    toggleSideBar,
}) => {
    
    const lt1024=window.matchMedia("(max-width:1024px)")

    const handleNewQuestion = () => {
        toggleNewQuestion(!showNewQuestion)
        toggleSideBar(false)
    }

    return(
        <aside 
            style= {
                (lt1024.matches && showSideBar) || !lt1024.matches ?
                {left:'0px'}:{left: '-250px'}
            }
        >
            {/*aside flex 1*/}
            <div className="sidebar-flex1">

                {/*side bar menu close btn and main-logo-wrapper*/}
                <div className="sidebar-menu-close-btn-logo-wrapper">
                    <button 
                        className="menu-btn"
                        onClick={()=>{
                            toggleSideBar(false)
                        }}
                    >
                        <div></div>
                        <div></div>
                    </button>
                    <div className="main-logo-wrapper">
                        <div className="main-logo">
                            <img
                                src="123.png"
                                alt="lecture free logo"
                            />
                        </div>
                    </div>
                </div>

                {/* new question chat history */}
                <div className="new-question-chat-history-triggers">
                    <button 
                        className="new-question-trigger sidebar-trigger"
                        onClick = {handleNewQuestion}
                    >
                        <img src="123456" alt="New Question"/>
                        <span>New Question</span>
                    </button>
                    {/*Chat History*/}
                    <button className="chat-history-trigger sidebar-trigger">
                        <img src="123456" alt="Chat History"/>
                        <span>Chat History</span>
                    </button>
                </div>
                {/* Menu */}
                <menu>
                    <h2>Menu</h2>
                    <ul>
                        <li className="sidebar-trigger">
                            <img src="123445" alt="My Notes"/>
                            <span>My Notes</span>
                        </li>
                        <li className="sidebar-trigger">
                            <img src="123456" alt="My Tools"/>
                            <span>My Tools</span>
                        </li>
                    </ul>
                </menu>
            </div>
            {/* user profile activator */}
            <div className="sidebar-flex2">
                <button className="sidebar-trigger user-profile-activator"> 
                    <div>
                        <img src="123456" alt="User Profile"/>
                        <span>{username}</span>
                    </div>
                    <div className="user-profile-activator-button">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </button>
            </div>
        </aside>
    )
};


const ChatPage = () => {
    const [showNewQuestion, setShowNewQuestion] = useState(false)
    const [showSideBar, setShowSideBar] = useState(false)
    const username = "John Doe"

    useEffect(()=>{

        // matchMedia whose matches property is true if
        // the screen width is less than 712 pixels
        const lt712=window.matchMedia("(max-width:712px)")


        const adSpace = 30
        const headerElem = document.querySelector('.chat-page>main>header')
        const innerMain = document.querySelector('.inner-main')
        const bottomPrompt = document.querySelector('.bottom-prompt')

        // expressions that gives the innerMain element the 
        // viewport's height as a min-height
        if (lt712.matches){
            innerMain.style.minHeight = (window.innerHeight + bottomPrompt.offsetHeight) + 'px';
        }else{
            innerMain.style.minHeight = (window.innerHeight - (headerElem.offsetHeight + adSpace)) + 'px';
        }
        // giving the innerMain a marginTop so it doesn't hide
        // behind the fixed header. 
        innerMain.style.marginTop = (headerElem.offsetHeight+adSpace) + 'px';

    },[])

    const stretchTextArea = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    const toggleSideBar = (param) => {
        setShowSideBar(param)
    }

    const toggleNewQuestion = (param) => {
        setShowNewQuestion(param)
    }

    return(
        <div className="chat-page">
            {/*aside/sidebar*/}
            <Sidebar 
                showNewQuestion = {showNewQuestion}
                toggleNewQuestion = {toggleNewQuestion}
                username = {username}
                showSideBar = {showSideBar}
                toggleSideBar = {toggleSideBar}
            />

            {/*main*/}
            <main>
                {/*header*/}
                <header>
                    <div className="user-welcome-message">
                        <h1 className="dashboard-user-welcome-message">Hello {username}</h1>
                        <div>Welcome to lecturefree</div>
                    </div>
                    <button 
                        className="menu-btn"
                        onClick={toggleSideBar}
                    >
                        <div></div>
                        <div></div>
                    </button>
                    {/*logo*/}
                    <MainLogo />
                </header>

                {/*
                    inner main

                    section that needs to be 
                    programatically pushed because
                    of the fixed header
                */}
                <div className="inner-main">
                    {/* Popup section */}
                    {
                        showNewQuestion && (
                            <section className="chat-page-popup">
                                <div>
                                    <header>
                                        <h2>My Questions</h2>
                                        {/* Button to remove popup */}
                                        <button
                                            onClick={()=>{toggleNewQuestion(false)}}
                                        >
                                            <img
                                                src="1234"
                                                alt="remove popup"
                                            />
                                        </button>
                                    </header>
                                    <ul className="indicate-scrollable-on-hover">
                                        {Array(7).fill(null).map((_, index) => (
                                            <li key={index}>
                                                <span>
                                                    What's the definition of PEs
                                                </span>
                                                {/* Button to remove a particular history */}
                                                <button>
                                                    <img
                                                        src="124"
                                                        alt="remove history entry"
                                                    />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        )
                    }

                    {/* Suggestion section */}

                    <section className="suggestion-section">
                        <div>
                            <h2>Workout playlist mix</h2>
                            <p>
                                This mix will keep you moving and grooving from start to finish.
                            </p>
                        </div>
                        <div>
                            <h2>Tips to meditate at school</h2>
                            <p>
                                Take a few minutes each day to breathe, relax, and unlock...
                                {/* 
                                    your full potential!
                                */}
                            </p>
                        </div>
                        <div>
                            <h2>Perfect desk setup</h2>
                            <p>
                                Create a workspace that sparks joy and helps you stay focused,...
                                {/* 
                                    creative, and successful!
                                */}
                            </p>
                        </div>
                        <div>
                            <h2>Quantum Physics</h2>
                            <p>
                                Dive into the fascinating world of particles, waves,...
                                {/* 
                                    and mysteries waiting to be unraveled!
                                */}
                            </p>
                        </div>
                    </section>
                </div>

                {/*
                    Chatbot prompt
                */}
                <div className="bottom-prompt">
                    <div className="dashboard-chatbot-prompt-wrapper">
                        {/*
                            textarea
                        */}
                        <textarea
                            className="chatbot-prompt"
                            placeholder="Search..."
                            style={{ height: 'auto' }}
                            onInput={stretchTextArea}
                        />
                        {/*
                            send button
                        */}
                        <button className="chatbot-prompt-send-button">
                            <img
                                src="../media/search-icon.svg"
                                alt="Search Icon" // It's good practice to add an alt attribute for images
                            />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default ChatPage;