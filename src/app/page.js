import styles from './page.module.css'
import Link from 'next/link'; 

export default function Home() {
  return (
    <>
      <Link href="/ejemplo1">
        <button>Css NORMAL</button>
      </Link>
      <Link href="/ejemplo1">
        <button>Con OoCss</button>
      </Link>
    </>
  )
}