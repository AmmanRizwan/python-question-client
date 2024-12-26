import React from "react";
import Example from "./Example.jsx";
import { questions, string_questions, function_questions, while_if_questions, if_questions, list_questions } from '../data/jsonData.js';

const Function = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 text-white pb-10">


    <div className="w-5/6">
      <div className="flex flex-col gap-6 mt-5">

      <details tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
      <summary className="collapse-title text-xl text-indigo-300 font-medium">Python Questions</summary>
      <div className="collapse-content px-8">
      <ul className="select-none my-6 list-decimal marker:text-indigo-400 pl-3 space-y-3">
            {
              questions.map((data, i) => {
                return (
                  <li key={i}>{data}</li>
                )
              }) 
            }
          </ul>
      </div>
    </details>

      <details tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
      <summary className="collapse-title text-xl text-indigo-300 font-medium">Python String Questions</summary>
      <div className="collapse-content px-8">
      <ul className="select-none my-6 list-decimal marker:text-indigo-400 pl-3 space-y-3">
            {
              string_questions.map((data, i) => {
                return (
                  <li key={i}>{data}</li>
                )
              }) 
            }
          </ul>
      </div>
    </details>

      <details className="collapse collapse-arrow border-base-300 bg-base-200 border">
      <summary className="collapse-title text-xl text-indigo-300 font-medium">Python List Questions</summary>
      <div className="collapse-content px-8">
      <ul className="select-none my-6 list-decimal marker:text-indigo-400 pl-3 space-y-3">
            {
              list_questions.map((data, i) => {
                return (
                  <li key={i}>{data}</li>
                )
              }) 
            }
          </ul>
      </div>
    </details>

      <details tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
      <summary className="collapse-title text-xl text-indigo-300 font-medium">Python If Else Statement Questions</summary>
      <div className="collapse-content px-8">
      <ul className="select-none my-6 list-decimal marker:text-indigo-400 pl-3 space-y-3">
            {
              if_questions.map((data, i) => {
                return (
                  <li key={i}>{data}</li>
                )
              }) 
            }
          </ul>
      </div>
    </details>
      
      <details tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
      <summary className="collapse-title text-xl text-indigo-300 font-medium">Python If Statement Using While Loop Questions</summary>
      <div className="collapse-content px-8">
      <ul className="select-none my-6 list-decimal marker:text-indigo-400 pl-3 space-y-3">
            {
              while_if_questions.map((data, i) => {
                return (
                  <li key={i}>{data}</li>
                )
              }) 
            }
          </ul>
      </div>
    </details >
      
      <details tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
      <summary className="collapse-title text-xl text-indigo-300 font-medium">Python Function Questions</summary>
      <div className="collapse-content px-8">
      <ul className="select-none my-6 list-decimal marker:text-indigo-400 pl-3 space-y-3">
            {
              function_questions.map((data, i) => {
                return (
                  <li key={i}>{data}</li>
                )
              }) 
            }
          </ul>
      </div>
    </details>
        </div>
            <Example />
      </div>
    </div>
  )
}

export default Function;