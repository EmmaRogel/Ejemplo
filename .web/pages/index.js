
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react"
import Script from "next/script"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang='es'`}
</Script>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa", "fontWeight": "500", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`moure`}
</Text>
  <Text as={`span`} sx={{"color": "#087ec4"}}>
  {`dev`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`1em`}>
  <Avatar name={`Brais Moure`} size={`xl`} src={`avatar.jpg`} sx={{"color": "#C3C7CB", "bg": "#171F26", "padding": "2px", "border": "4px", "borderColor": "#14A1F0"}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Brais Moure`}
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": "#14A1F0"}}>
  {`@mouredev`}
</Text>
  <HStack spacing={`1.5em`}>
  <Link as={``} isExternal={true} sx={{"hreh": "https://github.com/mouredev", "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`GitHub`} src={`icons/github.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={``} isExternal={true} sx={{"hreh": "https://twitter.com/mouredev", "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`Twitter/X`} src={`icons/x.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={``} isExternal={true} sx={{"hreh": "https://instagram.com/mouredev", "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`Instagram`} src={`icons/instagram.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={``} isExternal={true} sx={{"hreh": "https://tiktok.com/@mouredev", "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`TikTok`} src={`icons/tiktok.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={``} isExternal={true} sx={{"hreh": "https://open.spotify.com/show/4iKXt5k2zCbAQOrMePh7qh", "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`Spotify`} src={`icons/spotify.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={``} isExternal={true} sx={{"hreh": "https://linkedin.com/in/braismoure/", "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`LinkedIn`} src={`icons/linkedin.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`14+`}
</Text>
  {`años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`100+`}
</Text>
  {`aplicaciones creadas`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`1M+`}
</Text>
  {`seguidores`}
</Box>
</Flex>
  <Text sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  {`
            Soy ingeniero de software y actualmente trabajo como freelance
            full-stack developer iOS y Android.
            Además, creo contenido formativo sobre programación en redes.
            Aquí podrás encontrar todos mis enlaces de interés ¡Bienvenid@!
            `}
</Text>
</VStack>
  <VStack spacing={`1em`} sx={{"width": "100%"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://twitch.tv/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Twitch`} src={`icons/twitch.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingX": "0.5em", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Transmisiones sobre programación de lunes a viernes`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://youtube.com/@mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`YouTube`} src={`icons/youtube.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingX": "0.5em", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`YouTube`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Tutoriales sobre desarrollo de software semanales`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://discord.gg/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Discord`} src={`icons/discord.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingX": "0.5em", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`El chat y los grupos de estudio de la comunidad`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://retosdeprogramacion.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Retos de programación`} src={`icons/code.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingX": "0.5em", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Retos de programación`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Ejercicios semanales para practicar lógica de programación`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://youtube.com/@mouredevtv`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`YouTube ⓘ canal secundario`} src={`icons/youtube.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingX": "0.5em", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`YouTube ⓘ canal secundario`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Emisiones en directo destacadas`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Recursos y más`}
</Heading>
  <Link as={NextLink} href={`https://mouredev.com/libro-git`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Git y GitHub desde cero`} src={`icons/git.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingX": "0.5em", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Git y GitHub desde cero`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Aquí puedes comprar mi libro en formato físico y eBook`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://amazon.es/shop/mouredev/list/2ZIHJJFJ9AVZ3`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Libros recomendados`} src={`icons/book.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingX": "0.5em", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Libros recomendados`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi listado de libros sobre programación, ciencia y tecnología`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://mouredev.com/setup`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Mi setup`} src={`icons/setup.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingX": "0.5em", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Mi setup`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Listado con todos los elementos que uso en mi trabajo`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://mouredev.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`MoureDev`} src={`icons/logo.png`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingX": "0.5em", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`MoureDev`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi sitio web`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://buymeacoffee.com/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Invítame a un café`} src={`icons/coffee.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingX": "0.5em", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Invítame a un café`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`¿Quieres ayudarme a que siga creando contenido?`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`https://mypublicinbox.com/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`MyPublicInbox`} src={`icons/checkemail.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingX": "0.5em", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`MyPublicInbox`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Respuesta rápida y con preferencia`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`mailto:braismoure@mouredev.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Email`} src={`icons/email.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingX": "0.5em", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Email`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`braismoure@mouredev.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
  <VStack alignItems={`start`} spacing={`0.8em`} sx={{"width": "100%"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Colaboran`}
</Heading>
  <SimpleGrid columns={[1, 2]} spacing={`2em`}>
  <Link as={NextLink} href={`https://e.lga.to/MoureDev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`Logotipo de Elgato`} src={`elgato.png`} sx={{"height": "4em", "aspectRatio": "5 / 2"}}/>
</Link>
  <Link as={NextLink} href={`https://mvp.microsoft.com/es-es/PublicProfile/5004970`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`Logotipo de Microsoft MVP`} src={`mvp.png`} sx={{"height": "4em", "aspectRatio": "5 / 2"}}/>
</Link>
</SimpleGrid>
</VStack>
</VStack>
</Center>
  <VStack spacing={`1em`} sx={{"marginBottom": "2em", "paddingBottom": "2em", "paddingX": "2em", "color": "#A3ABB2"}}>
  <ChakraImage alt={`Logotipo de MoureDev. Una "eme" entre llaves.`} src={`logo.png`} sx={{"height": "4em", "width": "4em"}}/>
  <Link as={NextLink} href={`https://mouredev.com`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "_hover": {}}}>
  <Box>
  {`© 2014-2024 `}
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`MoureDev by Brais Moure`}
</Text>
  {` v3.`}
</Box>
</Link>
  <Text sx={{"fontSize": "0.8em", "marginTop": "0px !important"}}>
  {`BUILDING SOFTWARE WITH ♥ FROM GALICIA TO THE WORLD.`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`MoureDev | Te enseño programación y desarrollo de software`}
</title>
  <meta content={`Hola, mi nombre es Brais Moure. Soy ingeniero de software, desarrollador freelance full-stack y divulgador.`} name={`description`}/>
  <meta content={`avatar.jpg`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
