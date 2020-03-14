import './style.css';

import _ from "lodash"
import moment from "moment"
import React from "react"
import { useEffect, useRef, useState } from "react" 

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

  let numWords = _.compact(text.split(/\s/)).length

  const updateText = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    if (text.length < newText.length) {
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
      <span>{prompt}</span>
      <button className="button" onClick={newPrompt}>New Prompt</button>
      <button className="button" onClick={noPrompt}>No Prompt</button>
    </div>
    <div className="text-editor-main">
      <textarea 
        ref={textAreaEl}
        className="text-editor-text-area"
        placeholder="Enter your text here. No deleting. You can edit your work after you download it."
        value={text} 
        onChange={updateText}
      />
    </div>
    <div className="text-editor-commands">
      <a
        className="a"
        href={downloadHref(text)}
        download={downloadFilename()}
      >
        Download
      </a>
    </div>
    <footer className="text-editor-footer">
      word count: {numWords}
    </footer>
  </div>
}

function randomPrompt():string {
  // TOOD: get from API
  const prompts = [
    "When your eyes adjust to the darkness, you see another figure.",
    "100 writing prompts",
  ]
  const index = Math.floor(Math.random() * prompts.length)
  return prompts[index]  // TODO: Typescript should not be ok with this, because it could be undefined.
}

function downloadHref(text: string): string {
  // TODO: include prompt, make nice markdown
  return `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
}

function downloadFilename(): string {
  // TODO: prompts should be part of filename
  const isoDate = moment().format("YYYY-MM-DD")
  return `${isoDate}_writing-prompt.txt`
}