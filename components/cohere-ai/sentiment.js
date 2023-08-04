import { useState, useEffect } from 'react';
 
const cohere = require('cohere-ai');
cohere.init('mGyqCIyBng9R31NXVC0xs7JQJAeI7Z5L354sdXpc')

const examples = [
  { text: 'The order came 5 days early', label: 'positive review' },
  { text: 'The item exceeded my expectations', label: 'positive review' },
  { text: 'I ordered more for my friends', label: 'positive review' },
  { text: 'I would buy this again', label: 'positive review' },
  { text: 'I would recommend this to others', label: 'positive review' },
  { text: 'I would not recommend this to others', label: 'negative review' },
  { text: 'The package was damaged', label: 'negative review' },
  { text: 'The order is 5 days late', label: 'negative review' },
  { text: 'The order was incorrect', label: 'negative review' },
  { text: 'I want to return my item', label: 'negative review' },
  { text: 'The item\'s material feels low quality', label: 'negative review' },
  { text: 'The product was okay', label: 'neutral review' },
  { text: 'I received five items in total', label: 'neutral review' },
  { text: 'I bought it from the website', label: 'neutral review' },
  { text: 'I used the product this morning', label: 'neutral review' },
  { text: 'The product arrived yesterday', label: 'neutral review' },
];

const inputs = [
  'This item was broken when it arrived',
  'The product is amazing',
  'The product was not too bad',
  'I would not recommend this to others',
  'I would not buy this product again',
];

 
export default function Sentiment(props) {
   
    const [sentimentData, setSentimentData] =  useState();

    useEffect(() => { // useEffect hook
        setTimeout(() => { // simulate a delay
            (async () => {
                const response = await cohere.classify({
                  inputs: inputs,
                  examples: examples,
                });
                if (response) {
                  setSentimentData(response)
                  console.log('sentimentData',sentimentData)
                }
              })();
         }, 100);
    }, []);
    

    return (
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
         <h1 className='text-gray-600 text-lg'></h1>
         <h2 className="mt-24 mb-5 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
         Cohere AI - Product Sentiment
          </h2>
          <p className='bg-black text-white p-2 mb-5'><a href='https://cohere.com/' target='_blank'>Cohere</a></p>
          {sentimentData && sentimentData.body.classifications.map((item) => (
                <div key={item.id} className='text-black'>{item.input} - {item.prediction}</div>
            ))}
     </div>
    )
  }