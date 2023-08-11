import * as React from 'react'
import styles from './styles.module.css'
import { BackgroundImageLayer } from './layers/background-layer'

interface Props {
}

export const UiComponent = ({

}: Props) => {


  return <div className={styles.root}>
    <BackgroundImageLayer image='https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png' width="100%" height="100%"></BackgroundImageLayer>
  </div>
}
