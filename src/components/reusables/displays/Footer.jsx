import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "../../../pages/basic/Footerstyle";
import { RoutesObject } from '../../../routes/AllRoutes';
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <Box>
   
    <Container>
      <Row>
        <Column>
          <Heading>About Us</Heading>
          <FooterLink href={RoutesObject.visual.home.path}>Home</FooterLink>
          <FooterLink href="#">Vision</FooterLink>
          <FooterLink href="#"></FooterLink>
        </Column>
        <Column>
          <Heading>Services</Heading>
          <FooterLink href="/faq">FAQ's</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
          <FooterLink href="#">Back to top</FooterLink>
          <FooterLink href="#"></FooterLink>
        </Column>
        <Column>
          <Heading>Contact Us</Heading>
          <FooterLink href="#">Email: mkviljoen@gmail,com</FooterLink>
          <FooterLink href="#">Tel: 071 936 0023 </FooterLink>
          <FooterLink href="#"></FooterLink>
          <FooterLink href="#"></FooterLink>
        </Column>
        <Column>
          <Heading>Social Media</Heading>
          <FooterLink href="https://hi-in.facebook.com/micahkyle.viljoen/photos">
              
         <p><BsFacebook/>Facebook</p>
            
          </FooterLink>

          <FooterLink href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjM4MzppYH3AhWLX8AKHZMnDZsQFnoECAUQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fdsktech.sa%2F&usg=AOvVaw2BE5j7FblqFu8HakTPDQar">
          <p><BsInstagram/>instagram</p>
          </FooterLink>

          <FooterLink href="https://www.linkedin.com/in/micah-viljoen-6813a0202/">
           <p><BsLinkedin/>LinkedIn</p>
          </FooterLink>
        </Column>
      </Row>
    </Container>
  </Box>
 
    
  )
}
