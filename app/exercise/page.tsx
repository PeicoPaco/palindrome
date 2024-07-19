"use client"
import Header from '@/components/header'
import React, { useState } from 'react'

const Exercise = () => {
  const [palindromeText, setPalindromeText] = useState('');
  const [answer, setAnswer] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  function checkPalindrome(string : string) {
    const reverseString = string.split('').reverse().join('');
    return reverseString == string
  }

  const palindromeVerification = () => {
    setAnswer(checkPalindrome(palindromeText))
    setIsVerified(true)
  }

  const clearInput = () => {
    setPalindromeText('');
    setAnswer(false);
    setIsVerified(false);
  }

  return (
    <>
    <Header/>
    <div className="flex flex-col content-center border-2 border-white w-5/12 h-96 mt-8 shadow-md shadow-emerald-400">
      <p className='text-3xl text-center m-5'>
        Is it palindrome
      </p>
      <div className='flex flex-row self-center'>
        <p className='m-2 text-justify'>Word:</p>
        <input
          type="text"
          className='rounded-md px-3 py-1 m-2 text-black'
          onChange={(e) => setPalindromeText(e.target.value)}
          value={palindromeText}
        >
        </input>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button 
          onClick={() => palindromeVerification()} 
          className='exercise-button'
          >
          Verify
        </button>
        <button 
          onClick={() => clearInput()} 
          className='exercise-button'
          >
          Clear
        </button>
      </div>
      {isVerified && (
          <p className="text-center m-5">
            {answer ? "It is a palindrome" : "Not a palindrome"}
          </p>
        )}
    </div>
    </>
  )
}

export default Exercise