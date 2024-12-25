import React from "react";
import { questions, string_questions, function_questions, while_if_questions, if_questions, list_questions } from '../data/jsonData.js';

const Function = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 text-white pb-10">
    <div className="w-5/6">
      <div>
        <h3 className="text-indigo-300 font-medium text-xl sm:text-4xl transition-all duration-600">Python Questions</h3>

        <ul className="select-none mt-6 list-decimal marker:text-indigo-400 pl-3 space-y-3">
          {
            questions.map((data, i) => {
              return (
                <li key={i}>{data}</li>
              )
            }) 
          }
        </ul>
        <h3 className="text-indigo-300 font-medium text-xl sm:text-4xl transition-all mt-10 duration-600">Python String Questions</h3>

        <ul className="select-none mt-6 list-decimal marker:text-indigo-400 pl-3 space-y-3">
          {
            string_questions.map((data, i) => {
              return (
                <li key={i}>{data}</li>
              )
            }) 
          }
        </ul>

        <h3 className="text-indigo-300 font-medium text-xl sm:text-4xl transition-all mt-10 duration-600">Python List Questions</h3>

        <ul className="select-none mt-6 list-decimal marker:text-indigo-400 pl-3 space-y-3">
          {
            list_questions.map((data, i) => {
              return (
                <li key={i}>{data}</li>
              )
            }) 
          }
        </ul>

        <h3 className="text-indigo-300 font-medium text-xl sm:text-4xl transition-all mt-10 duration-600">Python If Else Statement Questions</h3>

        <ul className="select-none mt-6 list-decimal marker:text-indigo-400 pl-3 space-y-3">
          {
            if_questions.map((data, i) => {
              return (
                <li key={i}>{data}</li>
              )
            }) 
          }
        </ul>

        <h3 className="text-indigo-300 font-medium text-xl sm:text-4xl transition-all mt-10 duration-600">Python If statement using While Loop Questions</h3>

        <ul className="select-none mt-6 list-decimal marker:text-indigo-400 pl-3 space-y-3">
          {
            while_if_questions.map((data, i) => {
              return (
                <li key={i}>{data}</li>
              )
            }) 
          }
        </ul>

        
        <div>
          <h3 className="text-indigo-300 font-medium text-xl sm:text-4xl mt-10">Python Function</h3>

          <ul className="select-none mt-6 list-decimal marker:text-indigo-400 pl-3 space-y-3">
          {
            function_questions.map((data, i) => {
              return (
                <div key={i}>
                  <li>{data}</li>
                </div>
              )
            }) 
          }
        </ul>
        </div>
      </div>

      <div className="select-none my-10">
      <h3 className="text-indigo-300 font-medium text-xl sm:text-4xl">Python Function:</h3>
      <div className="sm:text-4xl mb-10 text-xl">Examples 1</div>
          <p className="font-sans font-medium">Add new element into the list Please Type this and run</p>
          <div className="font-medium p-3 bg-[#2F2D29] rounded-xl mt-4">
          <div className="text-green-500">input:</div>
          <div>arr = [1, 2, 3, 4, 5, 6]</div>
          <div>element = 7</div>
          <div>def add_element(arr, element):
          <div className="pl-4">arr.append(element)</div>
          </div>
          <div>add_element(arr, element)</div>
          <p>print(arr)</p>
          <br />
          <div className="text-green-500">output:</div>
          <div>[1, 2, 3, 4, 5, 6, 7]</div>
          </div>
      </div>

      <div className="select-none">
      <h3 className="select-none text-white text-xl sm:text-4xl my-10">Examples 2</h3>
          <div className=" p-3 bg-[#2F2D29] rounded-xl mt-4">
            <div className="text-green-500">input:</div>
            <div>def greet():</div>
            <p className="pl-4">print("Good Morning")</p>
            <br />
            <div className="text-green-500">output:</div>
            <div>Good Morning</div>
          </div>
      </div>
      
      <div className="select-none">
      <h3 className="select-none text-white text-xl sm:text-4xl my-10">Examples 3</h3>
          <div className="leading-[30px] p-3 bg-[#2F2D29] rounded-xl mt-4">
            <div className="text-green-500">how to create a function?</div>
            <div>Step 1: use def keyword and give a name of the function</div>
            <div>def greet():</div>
            <div className="text-red-400">Warning: After the def keyword with name of a function a line should be indentate other wise the function declartion may have a problem</div>
            <div>Step 2: write your code as you write for your program</div>
            <p className="pl-4">print("Good Morning")</p>
            <br />
            <div>Step 3: After finishing your code. You have to call the function with his name</div>
            <div>greet()</div>
            <div className="text-red-400">Warning: The function name should not be indentate as a function otherwise it may cause an error.</div>
            <div className="text-green-500">output:</div>
            <div>Good Morning</div>
          </div>
      </div>

      <div className="my-3">I Think You May have a Question.. <br />When you use parameter or argument.</div>
      <div>The Above question is without argument but the <strong>Example 1</strong> is with Argument you can relate 😊</div>
    </div>
    </div>
  )
}

export default Function;