import React from "react";

const questions = [
  "WAP to display the word 'welcome'",
  "WAP to take a variable int and input the value from the user and dipslay it.",
  "WAP to add 2 numbers entered by the user and display the result.",
  "WAP program to calculate the area and perimeter of circle.",
  "WAP to find maximum between five numbers.",
  "WAP to find minimum between five numbers.",
  "WAP to find maximum in list numbers.",
  "WAP to find minimum in list numbers.",
  "WAP to check whether a number is divisible by 5 and 11 or not.",
  "WAP to print 'welcome' 10 times using for and while loop.",
  "WAP to print all the odd numbers from 1 to 30.",
  "WAP to print all numbers divisible by 3 and 5 from 1 to 30.",
  "WAP to print the reverse string.",
  "WAP to print the reverse number."
]

const f_question = [
  "Write a function to addition two number.",
  "Write a function to substract two number.",
  "Write a function to multiply two number.",
  "Write a function to division two number.",
  "Write a function to print the list.",
  "Write a function to add new element on the list.",
  "Write a function to remove last element on the list.",
  "Write a function to print if the list is empty or not.",
  "Write a function to print all the even number with the given range.",
  "Write a function to print all the odd number with the given range.",
  "Write a function to sum all the number in the list without using sum() function.",
  "Write a function to print the max number between two number.",
  "Write a function to print the min number between two number."
]

const Function = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 text-white pb-10">
    <div className="w-5/6">
      <div>
        <h3 className="text-white font-medium text-xl sm:text-4xl transition-all duration-600">Python Questions</h3>

        <ul className="select-none mt-6 list-disc marker:text-indigo-400 pl-3 space-y-3">
          {
            questions.map((data, i) => {
              return (
                <li key={i}>{data}</li>
              )
            }) 
          }
        </ul>
        
        <div>
          <h3 className="text-white font-medium text-xl sm:text-4xl mt-10">Python Function</h3>

          <ul className="select-none mt-6 list-disc marker:text-indigo-400 pl-3 space-y-3">
          {
            f_question.map((data, i) => {
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

      <div className="select-none">
      <h3 className="text-white font-medium text-xl sm:text-4xl my-10">Python Function:<br/> Examples 1</h3>
          <p className="font-sans font-medium">Add new element into the list Please Type this and run</p>
          <div className="font-medium p-3 bg-slate-700 rounded-xl mt-4">
          <div>arr = [1, 2, 3, 4, 5, 6]</div>
          <div>def add_element(arr, element):
          <div className="pl-4">arr.append(element)</div>
          </div>
          <p>print(arr)</p>
          </div>
      </div>

      <div className="select-none">
      <h3 className="select-none text-white font-medium text-xl sm:text-4xl my-10">Examples 2</h3>
          <div className="font-medium p-3 bg-slate-700 rounded-xl mt-4">
            def greet():
            <p className="pl-4">print("Good Morning")</p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Function;