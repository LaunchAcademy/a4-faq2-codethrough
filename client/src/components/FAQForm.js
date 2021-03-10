import React, {useState} from 'react'

const FAQForm = (props) => {
  const [questionRecord, setQuestionRecord] = useState({question:"", answer:""})
  const [errors, setErrors] = useState("")

  const handleChange = (event) => {
    setQuestionRecord({...questionRecord, 
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(questionRecord.question !== "" && questionRecord.answer !== ""){
      setErrors("")
      props.addQuestion(questionRecord)
      setQuestionRecord({ question: "", answer: "" })
    } else {
     setErrors("All fields required")
  }
  }

  let errorMessage
  if(errors){
    errorMessage = <h2>{errors}</h2>
  }
  return(
    <form onSubmit={handleSubmit}>
      {errorMessage}
      <label htmlFor="question">Question</label>
      <input
        onChange={handleChange}
        id="question"
        name="question"
        value={questionRecord.question}
      >
      </input>

      <label htmlFor="answer">Answer</label>
      <input
        onChange={handleChange}
        id="answer"
        name="answer"
        value={questionRecord.answer}
      >
      </input>

      <input type="submit" value="Submit" />
    </form>
  )
}

export default FAQForm