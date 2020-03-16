import './style.css';

import _ from "lodash"
import moment from "moment"
import React from "react"
import { useEffect, useRef, useState } from "react" 

import { prompts } from "./prompts"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function TextEditor() {
  const textAreaEl: React.Ref<HTMLTextAreaElement> = useRef(null)
  // const promptEl: React.Ref<HTMLTextAreaElement> = useRef(null)

  const [prompt, setPrompt] = useState(randomPrompt())
  const [text, setText] = useState("")

  const focusTextArea = () => {
    const current = textAreaEl.current
    if (current == null) throw new Error("Should have a text area element")
    current.focus()
  }
  // Component has mounted
  useEffect(() => {
    focusTextArea()
  }, []);

  const numWords = _.compact(text.split(/\s/)).length

  const updateText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    if (text.length <= newText.length) {  // allow for letter changes, e.g. n to ñ
      setText(newText)
    }
  }

  const newPrompt = () => {
    setPrompt(randomPrompt())
    setText("")
    focusTextArea()
  }

  const noPrompt = () => {
    setPrompt("")
    setText("")
    focusTextArea()
  }

  return <div className="text-editor">
    <div className="text-editor-prompt">
      <span className="spaced-sides">{prompt}</span>
      <span className="text-editor-prompt-buttons spaced-sides">
        <button className="button spaced-sides" onClick={newPrompt}>New Prompt</button>
        <button className="button spaced-sides" onClick={noPrompt}>No Prompt</button>
      </span>
    </div>
    <div className="text-editor-main">
      <textarea 
        ref={textAreaEl}
        className="text-editor-text-area"
        placeholder="Enter your response here. No deleting. You can edit your work after you download it."
        value={text} 
        onChange={updateText}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
    </div>
    <div className="text-editor-commands">
      <a
        className="button"
        href={downloadHref(text)}
        download={downloadFilename(prompt)}
      >
        Download your response.
      </a>
    </div>
    <footer className="text-editor-footer">
      word count: {numWords}
    </footer>
  </div>
}

function randomPrompt(): string {
  // TOOD: get from API
  const index = Math.floor(Math.random() * prompts.length)
  return prompts[index]  // TODO: Typescript should not be ok with this, because it could be undefined.
}

function downloadHref(text: string): string {
  // TODO: include prompt, make nice markdown
  return `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
}

function downloadFilename(prompt: string): string {
  // TODO: prompts should be part of filename
  const slugFromPrompt = prompt.replace(/\s/g, "_").replace(/\W/g, '').substring(0, 30)
  const slug = (slugFromPrompt === "") ? "writing-exercise" : slugFromPrompt

  const isoDate = moment().format("YYYY-MM-DD")
  return `${isoDate}_${slug}.txt`
}