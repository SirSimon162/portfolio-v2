import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import { FooterContainer } from '../../../styles/componentStyles/footer.styles'

function Footer() {
  return (
    <FooterContainer>
        <p>Made with</p>
        <AiFillHeart/>
        <p>by Anmol Pattnayak</p>
    </FooterContainer>
  )
}

export default Footer