import React, { ReactNode } from 'react'
import styles from "./index.module.css"

type Props = {
  children: ReactNode;
}

const index = (props: Props) => {
  return (
    <div className={styles.card}>
      {props.children}  
    </div>
  )
}

export default index