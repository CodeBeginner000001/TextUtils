import React from 'react'

export default function About({mode}) {
    let myStyle = {
        color: mode==='dark'?'white':'black',
        backgroundColor: mode==='dark'?'black':'white'
    }
    return (
    <>
        <h1 className={`text-${mode==='light'?'dark':'light'}`}>About Us</h1>
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button accordion-body" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Analyze Your text
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body" style={myStyle}>
                        <strong>TextUtils</strong> gives you a way to analyze your text quickly and efficiently.Be it word
                        count, character count, sentence count, paragraph count, or reading time estimate, you can get
                        all of these values in a matter of seconds.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Free to use
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body" style={myStyle}>
                    <strong>TextUtils</strong>TextUtils is a free character counter tool that provides instant character count 
                        and word count statistics for a given text. TextUtils shows the number of words and characters.
                        The number of characters includes blank space, special characters, numbers and words (spaces separated
                        units). It also provides an instant character count and word count for social media posts such as Instagram
                        and Twitter.Thus it is suitable for writing text with words/character limit. 
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Browser Compatible
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body" style={myStyle}>
                        This is word counter software works in any web browers such as Chrome, Firefox, Internet Explorer, Safari, Opera.
                        It is also compatible with mobile devices such as iPhone, iPad, Android phones and tablet. It suits to count character
                        and words in any text editor such as Microsoft Word, Google Docs, LibreOffice, WordPress, eassys, pdf document ,blogs
                        , facebook, etc.

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
