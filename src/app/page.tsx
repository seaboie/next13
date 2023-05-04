import CheckBox from '@/components/checkbox/CheckBox'

export default function Home() {

  return (
    <div className='w-screen h-screen grid place-items-center '>
      <div className='w-1/2'>

        <div className='text-4xl mb-3'>Check Box tutorial</div>
        <CheckBox />

      </div>
    </div>
  )
}
