import React from 'react'
export default function TextSummary({ Text, mode }) {
  return (
    <>
      <h1 className={`text-${mode === 'light' ? 'dark' : 'light'}`}>Text Summary</h1>
      <p className={`text-${mode === 'light' ? 'dark' : 'light'}`}>{Text.split(/\s+/).filter((word) => { return word.length !== 0 }).length} Words and {Text.length} Character</p>
      <p className={`text-${mode === 'light' ? 'dark' : 'light'}`}>{(0.008 * (Text.split(/\s+/).length)).toFixed(2)} Minutes to read</p>
      <h2 className={`text-${mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
      <p className={`text-${mode === 'light' ? 'dark' : 'light'}`} style={{textWrap:"wrap",width:"1090px"}}>{Text.length>0?Text:"Nothing to preview"}</p>
    </>
  )
}
