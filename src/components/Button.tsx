import React, {useCallback} from 'react'

export function Button() {
  const onClick = useCallback(() => {
    console.log('clicked')
  }, [])

  return (
    <button onClick={onClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded' >Click me</button>
  )
}
