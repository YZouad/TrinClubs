 
/* This example requires Tailwind CSS v3.0+ */
export default function CtaSimpleCentered(props) {
    return (
      <div className="bg-white">
        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
             {props.children}
            </div>
          </div>
     </div>
      
    )
  }
  